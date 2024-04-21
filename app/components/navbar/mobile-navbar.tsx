"use client";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import styles from "./mobile-navbar.module.css";
import { NAV_LINKS } from "./navbar";

export default function MobileNavbar() {
  const homeLink = useMemo(() => NAV_LINKS.find((link) => link.isHome), []);
  const otherLinks = useMemo(
    () => NAV_LINKS.filter((link) => !link.isHome),
    []
  );

  // For animating the expansion of the dropdown menu.
  const otherLinksContainerRef = useRef<HTMLDivElement>(null);
  const [otherLinksContainerHeight, setOtherLinksContainerHeight] =
    useState("0");

  const toggleMenu = () => {
    setOtherLinksContainerHeight(
      otherLinksContainerHeight === "0"
        ? `${otherLinksContainerRef?.current?.scrollHeight}px`
        : "0"
    );
  };

  return (
    <nav>
      <div className={styles.mainBar}>
        {homeLink ? (
          <Link href={homeLink.href} key={homeLink.title}>
            {homeLink.title}
          </Link>
        ) : (
          // Empty div for maintaining the same layout.
          <div />
        )}

        <IconButton
          aria-label="expand navigation menu button"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <div
        className={styles.otherLinksContainer}
        ref={otherLinksContainerRef}
        style={{ height: otherLinksContainerHeight }}
      >
        {otherLinks.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
