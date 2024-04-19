"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import bannerPhoto from "./photos/banner.png";
import profilePhoto from "./photos/profile.png";

export default function Home() {
  const theme = useTheme();
  const smallViewport = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>AEON Bank Frontend Engineer Assessment</p>
        <div>by Andrew Lam 😉</div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={smallViewport ? profilePhoto : bannerPhoto}
          alt="Andrew Lam's photo"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
            ...(smallViewport && { borderRadius: "100%" }),
          }}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link href="/calculator" className={styles.card}>
          <h2>
            Calculator <span>-&gt;</span>
          </h2>
          <p>
            Challenge 1: Create a React page that works like a calculator that
            can add two numbers.
          </p>
        </Link>

        <Link href="/navbar" className={styles.card}>
          <h2>
            Navbar <span>-&gt;</span>
          </h2>
          <p>
            Challenge 2: Create a blank page using React that contains the
            navbar as below.
          </p>
        </Link>

        <Link href="/two-sum" className={styles.card}>
          <h2>
            Two Sum II <span>-&gt;</span>
          </h2>
          <p>Challenge 3: Two Sum II- Input Array Is Sorted</p>
        </Link>
      </div>
    </main>
  );
}
