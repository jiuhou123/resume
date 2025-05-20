import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 获取当前路径
  const path = request.nextUrl.pathname

  // 如果是根路径，直接允许访问
  if (path === '/') {
    return NextResponse.next()
  }

  // 检查是否已登录
  const isLoggedIn = request.cookies.get('isLoggedIn')?.value

  // 如果访问的是 /admin 路径
  if (path === '/admin') {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/edit', request.url))
    } else {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // 如果访问的是登录页面且已登录，重定向到编辑页面
  if (path === '/admin/login' && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/edit', request.url))
  }

  // 如果访问的是其他管理页面但未登录，重定向到登录页面
  if (path.startsWith('/admin/') && !isLoggedIn && path !== '/admin/login') {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

// 配置需要进行中间件处理的路径
export const config = {
  matcher: ['/admin', '/admin/:path*']
} 