import { serveSitePage, SYSTEM_SLUGS } from '@/lib/sitePage';

const SLUGS: ReadonlySet<string> = new Set(SYSTEM_SLUGS);

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> },
): Promise<Response> {
  const { slug } = await context.params;
  if (!SLUGS.has(slug)) {
    return new Response('Page not found', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  }
  return serveSitePage(request, slug);
}
