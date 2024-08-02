import { authMiddleware } from '@clerk/nextjs'

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware

export default authMiddleware({
  publicRoutes: ['/', '/product-detail/(.*)', '/about', '/contact', '/explore']
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  // Prevent the specified routes from accessing
  // authentication information:
  // ignoredRoutes: ['/no-auth-in-this-route'],
  /* afterAuth (auth, req) {
    // Si el usuario no está autenticado y está intentando acceder a una ruta protegida
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    // Si el usuario está autenticado y está intentando acceder a login o signup
    if (auth.userId && ['/login', '/signup'].includes(new URL(req.url).pathname)) {
      const path = '/'
      const dashboardUrl = new URL(path, req.url)
      return NextResponse.redirect(dashboardUrl)
    }

    // Permitir el acceso en todos los demás casos
    return NextResponse.next()
  } */
})

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.

    '/((?!.+\\.[\\w]+$|_next).*)',
    // Re-include any files in the api or trpc folders that might have an extension
    '/(api|trpc)(.*)'
  ]
}
