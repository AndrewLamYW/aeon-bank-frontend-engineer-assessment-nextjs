"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import MobileNavbar from "./mobile-navbar";
import { useEffect, useMemo, useState } from "react";

export const NAV_LINKS = [
  { title: "AEON", href: "/", isHome: true },
  { title: "Showcase", href: "/" },
  { title: "Docs", href: "/" },
  { title: "Blog", href: "/" },
  { title: "Analytics", href: "/" },
  { title: "Templates", href: "/" },
  { title: "Enterprise", href: "/" },
];

export default function Navbar() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const isMobile = useMemo(
    () => windowDimensions.width < 888,
    [windowDimensions.width]
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <nav className={styles.desktopNavbar}>
          <div className={styles.linksContainer}>
            {NAV_LINKS.map((link) => (
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            ))}
          </div>

          <input
            className={styles.searchInput}
            placeholder="Search documentation..."
          />
        </nav>
      )}
    </div>
  );
}
