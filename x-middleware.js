import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(NextRequest) {
    return NextResponse.redirect(new URL('/api/auth/signin', NextRequest.url))
}


// See "Matchin Paths" below to learn more
export const config = {
    matcher: '/blogs/:path*',
}