"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import { FaHome, FaBookOpen, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/assets/asp_logo.png" alt="ASP Logo" width={60} height={60} />
          </Link>
        </div>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                <FaHome className={styles.icon} />
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/courses" className={styles.navLink}>
                <FaBookOpen className={styles.icon} />
                Courses
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                <FaInfoCircle className={styles.icon} />
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
