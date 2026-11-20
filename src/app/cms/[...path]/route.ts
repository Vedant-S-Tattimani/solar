import fs from 'fs';
import path from 'path';

// Serves the Framer CMS binaries (Solutions + Reviews collections) locally.
// The Framer runtime requests byte ranges via `?range=from-to,from-to` and
// expects the requested slices concatenated in the response body.

const CMS_ROOT = path.join(process.cwd(), 'src', 'data', 'framer-cms');
const SEGMENT = /^[A-Za-z0-9_-][A-Za-z0-9_.-]*$/;

function parseRanges(param: string, size: number): Array<[number, number]> | null {
  const ranges: Array<[number, number]> = [];
  for (const part of param.split(',')) {
    const match = /^(\d+)-(\d+)$/.exec(part);
    if (!match) return null;
    const from = Number(match[1]);
    const to = Number(match[2]);
    if (from > to || to >= size) return null;
    ranges.push([from, to]);
  }
  return ranges;
}

export async function GET(
  request: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await context.params;

  if (
    !segments?.length ||
    !segments.every((s) => SEGMENT.test(s)) ||
    !segments[segments.length - 1].endsWith('.framercms')
  ) {
    return new Response('Not found', { status: 404 });
  }

  const filePath = path.join(CMS_ROOT, ...segments);
  if (!filePath.startsWith(CMS_ROOT + path.sep) || !fs.existsSync(filePath)) {
    return new Response('Not found', { status: 404 });
  }

  const data = fs.readFileSync(filePath);
  const rangeParam = new URL(request.url).searchParams.get('range');
  let body: Buffer = data;

  if (rangeParam) {
    const ranges = parseRanges(rangeParam, data.length);
    if (!ranges) return new Response('Invalid range', { status: 416 });
    body = Buffer.concat(ranges.map(([from, to]) => data.subarray(from, to + 1)));
  }

  return new Response(new Uint8Array(body), {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
