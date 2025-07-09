import Head from 'next/head';
import Header from '@/components/Header';
<Head>
  <title>Gearbox & Coir Mill Machinery Manufacturer | RS Engineering Products</title>
  <meta name="description" content="RS Engineering Products specializes in gearboxes, defibering machines, and coir mill equipment engineered for performance and reliability." />
  <meta name="keywords" content="Gearbox, Coir Machinery, Industrial Equipment, Defibering Machine, Conveyor Roller, Baling Press, RS Engineering" />
  <meta name="robots" content="index, follow" />
   <meta name="google-site-verification" content="_8lxFnkoU5VwkRJwxlgiIDKOpNLYBsFHnx6DmW26Ih8" />
  <meta property="og:title" content="RS Engineering Products | Gearboxes & Coir Mill Machinery" />
  <meta property="og:description" content="Leading manufacturer of coir mill equipment and custom gearboxes in India." />
  <meta property="og:image" content="/images/logo.png" />
  <meta property="og:url" content="https://rs-gear-products.vercel.app" />
  <link rel="canonical" href="https://rs-gear-products.vercel.app" />
 
</Head>
export default function Home() {
  return (
    <>
      <Head>
        <title>RS ENGINEERING PRODUCTS – Gearbox & Motor Control Solutions</title>
        <meta
          name="description"
          content="High-performance industrial gearbox and motor control systems from RS ENGINEERING PRODUCTS. Delivering reliability, precision, and innovation."
        />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-section text-center py-5 bg-dark text-white">
  <div className="container">
    <h1 className="display-5 fw-bold mb-3">
      Coir Mill Machinery Manufacturer
    </h1>
    <p className="lead mb-4">
      Supplying precision-built shredders, defibering units, and gear systems for high-performance coir fiber production.
      We  Export all the Produts.
    </p>
    <a href="/products" className="btn btn-warning btn-lg">
      Explore Products
    </a>
  </div>
</section>


        {/* Features Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row text-center g-4">
              <div className="col-md-4">
                <div className="p-4 bg-white rounded shadow h-100">
                  <h4 className="fw-bold mb-2">Custom Gearbox Solutions</h4>
                  <p>Precision-crafted systems tailored to your specifications.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-white rounded shadow h-100">
                  <h4 className="fw-bold mb-2">Durable Materials</h4>
                  <p>Industrial-grade builds for maximum strength and performance.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-white rounded shadow h-100">
                  <h4 className="fw-bold mb-2">Fast Delivery</h4>
                  <p>On-time production and reliable shipping across India.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-5 bg-dark text-white text-center">
          <div className="container">
            <h2 className="mb-4">Why Choose <span className="text-warning">RS ENGINEERING PRODUCTS</span>?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="p-4 bg-secondary rounded">
                  <i className="fas fa-certificate fa-2x mb-3 text-warning" />
                  <h5 className="fw-bold">ISO Certified</h5>
                  <p>Top-tier standards for quality and reliability.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-secondary rounded">
                  <i className="fas fa-business-time fa-2x mb-3 text-warning" />
                  <h5 className="fw-bold">A UNIT OF REW
25+ Years Experience</h5>
                  <p>Proven expertise across multiple heavy industries.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 bg-secondary rounded">
                  <i className="fas fa-cogs fa-2x mb-3 text-warning" />
                  <h5 className="fw-bold">Custom Engineering</h5>
                  <p>Solutions crafted for specific industrial challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {/* <section className="py-5 bg-light">
          <div className="container text-center">
            <h2 className="mb-4">What Our Clients Say</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="mb-2">"Never missed a delivery in 4 years. Support and quality unmatched."</p>
                  <strong>– K. Kumar, Supply Chain Head</strong>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="mb-2">"Their gearboxes outlast every other brand we've used."</p>
                  <strong>– S. Dinesh, Operations Director</strong>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bg-white p-4 rounded shadow">
                  <p className="mb-2">"Customized shaft solutions delivered in record time."</p>
                  <strong>– P. Ramesh, Maintenance Supervisor</strong>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Industries Served */}
        {/* <section className="py-5 bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Industries We Serve</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              {['Textile', 'Cement', 'Steel', 'Power', 'Mining', 'Automation'].map((industry, idx) => (
                <span key={idx} className="badge bg-secondary fs-6 px-3 py-2">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <div className="container">
          &copy; {new Date().getFullYear()} RS ENGINEERING PRODUCTS. All rights reserved.
        </div>
      </footer>
    </>
  );
}
