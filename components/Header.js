'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-dark text-white shadow sticky-top">
      <div className="container d-flex flex-column flex-lg-row justify-content-between align-items-center py-2">
        {/* Logo & Company Info */}
        <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="R.S. Engineering Logo"
            width={50}
            height={50}
            style={{ objectFit: 'contain', borderRadius: '5px' }}
            priority
          />
          <div className="text-center text-lg-start">
            <h5 className="mb-0 fw-bold">
              RS <span className="text-warning">ENGINEERING PRODUCTS</span>
            </h5>
            <small className="text-warning fw-semibold">GSTIN: 33JGUPS0061J1ZV</small>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="btn btn-outline-light d-lg-none mt-3"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {/* 🔥 Replaced Bootstrap default icon with FontAwesome hamburger icon */}
          <i className="fas fa-bars fs-4"></i>
        </button>

        {/* Navigation Menu */}
        <nav className={`navbar navbar-expand-lg ${menuOpen ? 'd-block mt-3' : 'd-none d-lg-flex'}`}>
          <ul className="navbar-nav ms-auto d-flex flex-column flex-lg-row align-items-lg-center gap-3">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link text-white fw-medium ${pathname === '/' ? 'text-warning fw-bold' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className={`nav-link text-white fw-medium ${pathname === '/about' ? 'text-warning fw-bold' : ''}`}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                className={`nav-link text-white fw-medium ${pathname === '/products' ? 'text-warning fw-bold' : ''}`}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className={`nav-link text-white fw-medium ${pathname === '/contact' ? 'text-warning fw-bold' : ''}`}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="btn btn-warning fw-semibold ms-lg-3">
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
