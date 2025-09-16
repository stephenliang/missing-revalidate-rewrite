import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const subdomain = host.split('.')[0];

    if (subdomain) {
       return NextResponse.rewrite(new URL(`/${subdomain}`, request.url));
    }

    // On the root domain, allow normal access
    return NextResponse.next();
}