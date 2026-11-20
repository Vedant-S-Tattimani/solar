import { getCloudflareContext } from '@opennextjs/cloudflare';

// Pre-rendered pages are static files in public/site. On Cloudflare they are read
// through the Worker's ASSETS binding (there is no filesystem at runtime);
// under `next dev` / `next start` they are fetched from the same server.

interface AssetFetcher {
  fetch(input: Request | URL | string): Promise<Response>;
}

function assetsBinding(): AssetFetcher | undefined {
  try {
    return getCloudflareContext().env.ASSETS as AssetFetcher | undefined;
  } catch {
    return undefined;
  }
}

export const SYSTEM_SLUGS = [
  'backup-essentials',
  'solar-starter',
  'solar-storage',
  'whole-home-independence',
  'off-grid-estate',
  'ground-mounted-plant',
  'wind-turbine',
  'solar-water-heater',
  'heat-pump-residential',
  'heat-pump-commercial',
] as const;

export async function serveSitePage(request: Request, page: string): Promise<Response> {
  const url = new URL(`/site/${page}.html`, request.url);
  const assets = assetsBinding();
  const upstream = assets ? await assets.fetch(url) : await fetch(url);

  if (!upstream.ok) {
    return new Response('Page not found', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }

  // Link previews (WhatsApp, Telegram, X) need absolute URLs; the domain is only
  // known at request time, so fill it in here.
  const origin = new URL(request.url).origin;
  const html = (await upstream.text()).replace(
    /(<meta (?:property="og:(?:image|url)"|name="twitter:image") content=")\//g,
    `$1${origin}/`,
  );

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
