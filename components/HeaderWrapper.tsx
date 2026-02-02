// "use client";

// import { usePathname } from "next/navigation";
// import Nav from "./Nav";

// export default function HeaderWrapper() {
//   const pathname = usePathname();

//   // Only show Nav on these paths
//   const allowedPaths = ["/", "/about", "/projects", `/projects/$[projectId]`, "/contact", "/achievements"];
//   if (!allowedPaths.includes(pathname)) return null;

//   return <Nav />;
// }


"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Static paths where Nav should appear
  const staticPaths = [
    "/",
    "/about",
    "/projects",
    "/contact",
    "/achievements",
  ];

  // Show Nav for:
  // - static paths above
  // - ALL dynamic project routes (/projects/[projectId])
  const shouldShowNav =
    staticPaths.includes(pathname) ||
    pathname.startsWith("/projects/");

  if (!shouldShowNav) return null;

  return <Nav />;
}
