import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.linksContainer}>
          <Link href="/">AEON</Link>
          <Link href="/">Showcase</Link>
          <Link href="/">Docs</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Analytics</Link>
          <Link href="/">Templates</Link>
          <Link href="/">Enterprise</Link>
        </div>

        <input
          className={styles.searchInput}
          placeholder="Search documentation..."
        />
      </nav>
    </div>
  );
}
