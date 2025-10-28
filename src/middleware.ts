import { NextRequest, NextResponse } from 'next/server';

const FACEBOOK_PARAM_PASS = 'x9kL4mN8qR3sP7v';

const domainMap: Record<string, string> = {
  "healthprosperity.site": "1",
};

export function middleware(req: NextRequest) {

  const { nextUrl } = req;
  const url = nextUrl.toString();
  const host = nextUrl.hostname.toLowerCase();
  const domainId = domainMap[host] || "0";
  const searchParams = nextUrl.searchParams;

  const requestHeaders = new Headers(req.headers);

  requestHeaders.set('x-url', url);
  requestHeaders.set('x-host', host);
  requestHeaders.set('x-domain-id', domainId);

  const catParam = searchParams.get('cat');

  if (catParam === FACEBOOK_PARAM_PASS) {

    searchParams.delete('cat');
    const newUrl = req.nextUrl.clone();
    newUrl.search = searchParams.toString();
  
    const response = NextResponse.redirect(newUrl, { status: 302 });
    
    response.cookies.set({
      name: 'cat_valid',
      value: '1',
      path: '/',
      maxAge: 60 * 60 * 72,
      httpOnly: false,
    });
  
    return response;
  
  };

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};