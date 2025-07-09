'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    setStatus(result);

    if (result.success) {
      setForm({ name: '', email: '', subject: '', message: '' });

      // Automatically clear message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  } catch (err) {
    setStatus({ success: false, message: 'Something went wrong!' });
    setTimeout(() => setStatus(null), 5000); // Clear error message too
  }
  setLoading(false);
};


  return (
    <>
      <Head>
        <title>Contact Us - RS ENGINEERING PRODUCTS</title>
       <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  referrerPolicy="no-referrer"
/>

      </Head>
      <Header />

      <main className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-dark">Get in Touch</h1>
            <p className="text-muted">Reach out for industrial solutions or custom manufacturing needs.</p>
          </div>

          <section className="py-4">
            <div className="row g-5 align-items-stretch">
              <div className="col-lg-6">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <h3 className="text-dark fw-bold mb-4">
                      <i className="fas fa-building text-warning me-2"></i>
                      Company Contact Information
                    </h3>
                    <div className="mb-4 border-top pt-3">
                      <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
                        <i className="fas fa-user-tie text-warning me-2 fs-5"></i>
                        Proprietor
                      </h6>
                      <div className="p-3 bg-light rounded shadow-sm">
                        <p className="mb-0 fs-5 fw-semibold text-dark">Santhosh</p>
                        <small className="text-muted">Founder & Head of Operations</small>
                      </div>
                    </div>
                    <div className="mb-4 border-top pt-3">
                      <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
                        <i className="fas fa-industry text-warning me-2 fs-5"></i>
                        Company
                      </h6>
                      <div className="p-3 bg-light rounded shadow-sm">
                        <p className="mb-0 fs-5 fw-semibold text-dark">RS ENGINEERING PRODUCTS</p>
                        <small className="text-muted">Precision engineering for industrial success</small>
                      </div>
                    </div>
                    <div className="mb-4 border-top pt-3">
                      <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
                        <i className="fas fa-map-marker-alt text-warning me-2 fs-5"></i>
                        Address
                      </h6>
                      <div className="p-3 bg-light rounded shadow-sm">
                        <p className="mb-0 fs-6 text-dark">
                          50, P.K. Ramasamy Nagar, Near Viscose Park,<br />
                          Mylampatti Post, Coimbatore – 641 062
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 border-top pt-3">
                      <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
                        <i className="fas fa-phone-alt text-warning me-2 fs-5"></i>
                        Contact
                      </h6>
                      <div className="p-3 bg-light rounded shadow-sm">
                        <p className="mb-1">
                          <i className="fas fa-phone text-warning me-2"></i>
                          <a href="tel:+917502585420" className="text-dark fw-medium text-decoration-none">
                            +91 75025 85420
                          </a>
                        </p>
                        <p className="mb-0">
                          <i className="fas fa-envelope text-warning me-2"></i>
                          <a href="mailto:rsengineeringproducts@gmail.com" className="text-dark fw-medium text-decoration-none">
                            rsengineeringproducts@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="mb-4 border-top pt-3">
                      <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
                        <i className="fas fa-file-invoice text-warning me-2 fs-5"></i>
                        Registration
                      </h6>
                      <div className="p-3 bg-light rounded shadow-sm">
                        <p className="mb-0 text-dark fw-medium">
                          GSTIN: 33JGUPS0061J1ZV<br />
                          IEC: JGUPS0061J
                        </p>
                      </div>
                    </div>
                    <div className="border-top pt-3">
                      <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
                        <i className="fas fa-clock text-warning me-2 fs-5"></i>
                        Working Hours
                      </h6>
                      <div className="p-3 bg-light rounded shadow-sm">
                        <p className="mb-0 text-dark fw-medium">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <h3 className="mb-4 text-dark fw-bold">
                      <i className="fas fa-paper-plane text-warning me-2"></i>Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control" placeholder="Your Email" required />
                      </div>
                      <div className="mb-3">
                        <input name="subject" value={form.subject} onChange={handleChange} className="form-control" placeholder="Subject" />
                      </div>
                      <div className="mb-3">
                        <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="form-control" placeholder="Your Message" required />
                      </div>
                      <button type="submit" className="btn btn-warning w-100 fw-semibold">
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                      {status && <div className={`mt-3 alert ${status.success ? 'alert-success' : 'alert-danger'}`}>{status.message}</div>}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-5 rounded overflow-hidden shadow">
            <iframe
              title="RS Engineering Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.738844881998!2d77.04652687452058!3d11.058196053934232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857003e3e5201%3A0xf7df608bcbfa5ac0!2sRs%20engineering%20products!5e0!3m2!1sen!2sin!4v1751821154654!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <footer className="bg-dark text-white text-center py-3 mt-5">
          © 2025 RS ENGINEERING PRODUCTS. All rights reserved.
        </footer>
      </main>
    </>
  );
}
