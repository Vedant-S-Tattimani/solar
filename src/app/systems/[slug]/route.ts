import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> | { slug: string } }
) {
  const params = await context.params;
  const slug = params?.slug;

  const validSlugs = [
    'backup-essentials',
    'solar-starter',
    'solar-storage',
    'whole-home-independence',
    'off-grid-estate',
  ];

  if (!slug || !validSlugs.includes(slug)) {
    return new Response('System not found', { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'src', 'app', 'pages_html', `${slug}.html`);
  if (!fs.existsSync(filePath)) {
    return new Response('File not found', { status: 404 });
  }

  const html = fs.readFileSync(filePath, 'utf8');
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

