import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'pages_html', 'home.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let data: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      data = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formData.forEach((val, key) => {
        data[key] = val.toString();
      });
    }

    console.log('[Quote Request Submission Received]:', data);

    // If client requested JSON, respond with JSON
    if (contentType.includes('application/json') || request.headers.get('accept')?.includes('application/json')) {
      return new Response(JSON.stringify({ success: true, message: 'Quote received successfully!' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Otherwise redirect to thank you page
    return Response.redirect(new URL('/thank-you', request.url), 303);
  } catch (err: any) {
    console.error('Submission error:', err);
    return Response.redirect(new URL('/thank-you', request.url), 303);
  }
}
