import Head from 'next/head';
import Header from '@/components/Header';
import Script from 'next/script';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - RS ENGINEERING PRODUCTS</title>
        {/* Include FontAwesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnH/PRF4+o6tY6RZ9VrKjQk3+XvV9UAKmU7n8KxuVK3gXYy5IVR3HE8jCq+S+2e9rYObceE8A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Header />

      <main className="bg-light py-5">
        <div className="container">
          {/* Title Section */}
          <div className="text-center mb-5">
            <h1 className="fw-bold text-dark">Get in Touch</h1>
            <p className="text-muted">Reach out for industrial solutions or custom manufacturing needs.</p>
          </div>

          {/* Contact Section */}
          <section className="py-4">
            <div className="row g-5 align-items-stretch">
              {/* Contact Info */}
 <div className="col-lg-6">
  <div className="card shadow border-0 h-100">
    <div className="card-body">
      <h3 className="text-dark fw-bold mb-4">
        <i className="fas fa-building text-warning me-2"></i>
        Company Contact Information
      </h3>

      {/* Proprietor */}
      <div className="mb-4 border-top pt-3">
        <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
          <i className="fas fa-user-tie text-warning me-2 fs-5"></i>
          Proprietor
        </h6>
        <div className="p-3 bg-light rounded shadow-sm">
          <p className="mb-0 fs-5 fw-semibold text-dark">Santhosh B.Tech</p>
          <small className="text-muted">Founder & Head of Operations</small>
        </div>
      </div>

      {/* Company */}
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

      {/* Address */}
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

      {/* Contact */}
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

      {/* Registration */}
      <div className="mb-4 border-top pt-3">
        <h6 className="text-uppercase fw-bold text-secondary mb-2 d-flex align-items-center">
          <i className="fas fa-file-invoice text-warning me-2 fs-5"></i>
          Registration
        </h6>
        <div className="p-3 bg-light rounded shadow-sm">
          <p className="mb-0 text-dark fw-medium">
            GSTIN: <span className="text-body">33JGUPS0061J1ZV</span><br />
            IEC: <span className="text-body">JGUPS0061J</span>
          </p>
        </div>
      </div>

      {/* Working Hours */}
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



              {/* Contact Form */}
              <div className="col-lg-6">
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <h3 className="mb-4 text-dark fw-bold">
                      <i className="fas fa-paper-plane text-warning me-2"></i>Send Us a Message
                    </h3>
                    <form>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Your Name" required />
                      </div>
                      <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Your Email" required />
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Subject" />
                      </div>
                      <div className="mb-3">
                        <textarea className="form-control" rows={5} placeholder="Your Message" required></textarea>
                      </div>
                      <button type="submit" className="btn btn-warning w-100 fw-semibold">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Map */}
          <div className="mt-5 rounded overflow-hidden shadow">
            <iframe
              title="RS Engineering Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.739435237971!2d77.04651297452058!3d11.058151853935133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857d6ed01756f%3A0x289a214042da0ee8!2sRevanth%20Engineering%20Works!5e0!3m2!1sen!2sin!4v1751198458714!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-5">
          © 2025 RS ENGINEERING PRODUCTS / Revanth Engineering Works. All rights reserved.
        </footer>
      </main>
    </>
  );
}
