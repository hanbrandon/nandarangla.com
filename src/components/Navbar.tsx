"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Food Gallery", href: "#gallery" },
  { label: "Menu", href: "#menu" },
  { label: "Contact Us", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  // Handle Escape key to close drawer and handle focus traps
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
        toggleButtonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = "hidden";
      // Focus the close button when opening drawer
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Click outside drawer to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target as Node)
      ) {
        closeDrawer();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main Navigation">
          {/* Brand Logo */}
          <a href="#home" className={styles.brand} aria-label="Nandarang Home" style={{ display: 'flex', alignItems: 'center' }}>
            <div className={styles.logoMask} role="img" aria-label="Nandarang Logo" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className={styles.menuList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.menuItem}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Call to Action Link */}
          <div className={styles.actionArea}>
            <a 
              href="https://order.online/store/cafe-nandarang-los-angeles-87238/?hideModal=true&pickup=true" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '11px' }}
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            ref={toggleButtonRef}
            className={styles.mobileToggle}
            onClick={toggleDrawer}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label="Toggle navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`${styles.drawerOverlay} ${isOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          className={styles.drawer}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <button
            ref={closeButtonRef}
            className={styles.drawerCloseBtn}
            onClick={closeDrawer}
            aria-label="Close navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <ul className={styles.drawerNav}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.drawerItem}>
                <a href={link.href} onClick={closeDrawer}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.drawerItem} style={{ marginTop: '20px' }}>
              <a
                href="https://order.online/store/cafe-nandarang-los-angeles-87238/?hideModal=true&pickup=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                onClick={closeDrawer}
                style={{ textAlign: 'center', width: '100%', display: 'block' }}
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
