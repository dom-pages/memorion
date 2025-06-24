import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const BLACK_VSL_PASSWORD = 'b6mP2e7KIKH7i2w';
const COOKIE_NAME = 'vsl_access';
const COOKIE_EXPIRY = 72 * 60 * 60; // 72 horas em segundos

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const searchParams = url.searchParams;
  const catParam = searchParams.get('cat');

  // Verifica se o parâmetro cat está presente e é válido
  if (catParam === BLACK_VSL_PASSWORD) {
    // Remove o parâmetro cat da URL
    searchParams.delete('cat');
    url.search = searchParams.toString();

    // Cria a resposta com o cookie
    const response = NextResponse.redirect(url);
    response.cookies.set({
      name: COOKIE_NAME,
      value: 'true',
      expires: new Date(Date.now() + COOKIE_EXPIRY * 1000),
      path: '/',
    });

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/start'],
}; 