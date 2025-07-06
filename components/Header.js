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
      <div className="container-fluid py-2 px-3 px-lg-5">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">

          {/* === Center: Logo + Title + GSTIN === */}
          <div className="d-flex flex-column align-items-center mb-2 mb-lg-0">
            <div className="d-flex align-items-center gap-3">
              {/* Logo */}
              <Link href="/" className="d-inline-block">
                <Image
                  src="/images/logo.png"
                  alt="RS Engineering Logo"
                  width={50}
                  height={50}
                  style={{ objectFit: 'contain', borderRadius: '5px' }}
                  priority
                />
              </Link>

              {/* Title */}
              <div className="text-center">
                <h5 className="mb-0 fw-bold text-white text-uppercase">
                  RS <span className="text-warning">ENGINEERING PRODUCTS</span>
                </h5>
                <small className="text-warning d-block">GSTIN: 33JGUPS0061J1ZV</small>
              </div>
            </div>
          </div>

          {/* === Right: Nav Menu & CTA === */}
          <div className="d-flex align-items-center">
            {/* Mobile Toggle */}
            <button
              className="btn btn-outline-light d-lg-none me-2"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Nav Links */}
            <nav className={`navbar navbar-expand-lg ${menuOpen ? 'd-block' : 'd-none d-lg-flex'}`}>
              <ul className="navbar-nav d-flex flex-column flex-lg-row align-items-lg-center gap-3 mb-0">
                {['/', '/about', '/products', '/contact'].map((path, idx) => (
                  <li className="nav-item" key={path}>
                    <Link
                      href={path}
                      className={`nav-link fw-medium text-white px-2 ${pathname === path ? 'text-warning fw-bold' : ''}`}
                    >
                      {['Home', 'About', 'Products', 'Contact'][idx]}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  <Link href="/contact" className="btn btn-warning fw-semibold ms-lg-3">
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
