import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Solo redirigir desde dominios vercel.app al dominio principal
  // La redirección de www → jcengine.co se maneja en Vercel Settings → Domains
  if (hostname.includes('vercel.app')) {
    const url = request.nextUrl.clone();
    url.host = 'jcengine.co';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301); // 301 = permanent redirect
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.svg).*)',
  ],
};
