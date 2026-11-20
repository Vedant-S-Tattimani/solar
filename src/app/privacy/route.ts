import { serveSitePage } from '@/lib/sitePage';

export async function GET(request: Request): Promise<Response> {
  return serveSitePage(request, 'privacy');
}
