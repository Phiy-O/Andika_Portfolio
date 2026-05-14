import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware() {
    return;
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

        if (!isAdminRoute) {
          return true;
        }

        return Boolean(token && token.role === "ADMIN");
      },
    },
    pages: {
      signIn: "/login",
    },
  },
);

export const config = {
  matcher: ["/admin/:path*"],
};
