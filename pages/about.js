import Head from 'next/head';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - RS ENGINEERING PRODUCTS</title>
      </Head>
      <Header />

      <main className="bg-light text-dark">
        {/* Hero Banner */}
        <section className="hero-section text-white text-center d-flex align-items-center" style={{ minHeight: '400px', background: 'linear-gradient(135deg, #1f2937, #111827)' }}>
          <div className="container">
            <h1 className="display-4 fw-bold">Engineering Excellence for Every Industry</h1>
            <p className="lead mt-3">Delivering innovation, precision, and strength for 15+ years</p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="mb-3">Who We Are</h2>
                <p>
                  RS ENGINEERING PRODUCTS is a pioneer in designing and manufacturing robust industrial machinery
                  components that drive productivity and durability. For over 15 years, we've served sectors
                  like textile, steel, power, and cement with gearboxes, shafts, housings, and customized solutions.
                </p>
                <p>
                  Our legacy is built on precision engineering, customer satisfaction, and a commitment to innovation.
                  From small businesses to large industrial plants, our products are trusted by engineers and
                  operators across India.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src="/images/image14.png" alt="About RS Engineering" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">Our Core Strengths</h2>
            <div className="row g-4">
              <div className="col-md-3 text-center">
                <i className="fas fa-cogs fa-3x text-warning mb-3"></i>
                <h5>Precision Manufacturing</h5>
                <p>Micron-level accuracy and endurance-tested components.</p>
              </div>
              <div className="col-md-3 text-center">
                <i className="fas fa-truck-fast fa-3x text-warning mb-3"></i>
                <h5>Timely Delivery</h5>
                <p>Streamlined operations ensure on-time delivery, every time.</p>
              </div>
              <div className="col-md-3 text-center">
                <i className="fas fa-user-shield fa-3x text-warning mb-3"></i>
                <h5>Trusted Quality</h5>
                <p>ISO-certified with rigorous quality control practices.</p>
              </div>
              <div className="col-md-3 text-center">
                <i className="fas fa-headset fa-3x text-warning mb-3"></i>
                <h5>Dedicated Support</h5>
                <p>Expert technical team with 24/7 support availability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Our Journey</h2>
            <div className="timeline border-start border-2 border-warning ps-4">
              <div className="mb-3">
                <h6><strong>2009</strong> – Revanth Engineering Works was established</h6>
              </div>
              <div className="mb-3">
                <h6><strong>2012</strong> – Started supplying to the textile industry</h6>
              </div>
              <div className="mb-3">
                <h6><strong>2015</strong> – Expanded into steel and cement sectors</h6>
              </div>
              <div className="mb-3">
                <h6><strong>2018</strong> – Surpassed 100+ industrial clients</h6>
              </div>
              <div className="mb-3">
                <h6><strong>2024</strong> – Launched precision automated gearboxes</h6>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-5 bg-white text-center">
          <div className="container">
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="lead">We proudly deliver to the following sectors:</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <span className="badge bg-secondary fs-6 py-2 px-3">Textile Machinery</span>
              <span className="badge bg-secondary fs-6 py-2 px-3">Steel Plants</span>
              <span className="badge bg-secondary fs-6 py-2 px-3">Cement Industries</span>
              <span className="badge bg-secondary fs-6 py-2 px-3">Power Transmission</span>
              <span className="badge bg-secondary fs-6 py-2 px-3">Food Processing</span>
              <span className="badge bg-secondary fs-6 py-2 px-3">Mining</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4">
          <div className="container">
            <p className="mb-0">© 2025 RS ENGINEERING PRODUCTS / Revanth Engineering Works. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
