import Head from 'next/head';
import Header from '@/components/Header';
import { useState } from 'react';
import Image from 'next/image';
const allProducts = [
  {
    "img": "/images/image9.png",
    "title": "Crown Type Gearbox \u2013 Special 1:5 Model",
    "desc": "Engineered for coir mills, this crown-type gearbox ensures high torque transmission with precision gearing, ideal for intensive load applications.",
    "alt": "Crown Type Gearbox Special 1:5 Model for Coir Mill",
    "slug": "crown-type-gearbox-special-1-5-model"
  },
  {
    "img": "/images/image13.png",
    "title": "Heavy-Duty Auto Feeder \u2013 1:600 Ratio",
    "desc": "Heavy-duty auto feeder unit with double reduction mechanism, delivering smooth, consistent fiber feeding for high-capacity operations.",
    "alt": "Heavy-Duty Auto Feeder with 1:600 Gear Ratio for Coir Mill",
    "slug": "heavy-duty-auto-feeder-1-600-ratio"
  },
  {
    "img": "/images/image12.png",
    "title": "Gearbox 400 Series \u2013 1:17 & 1:35 Models",
    "desc": "Heavy-duty gearbox designed for conveyor, bunker, and screener systems, ensuring reliable speed reduction and load handling.",
    "alt": "Gearbox 400 Series for Conveyor and Bunker Systems",
    "slug": "gearbox-400-series-1-17-1-35-models"
  },
  {
    "img": "/images/image11.png",
    "title": "Gearbox 300 Series \u2013 1:16 & 1:32 Models",
    "desc": "Compact and robust gearbox suitable for bunker, conveyor, and screener drives, offering optimal balance of performance and durability.",
    "alt": "Gearbox 300 Series Models 1:16 and 1:32 for Coir Mill",
    "slug": "gearbox-300-series-1-16-1-32-models"
  },
  {
    "img": "/images/image1.png",
    "title": "Heavy-Duty Bearing Block",
    "desc": "Precision-crafted bearing block for coir mill operations, designed for seamless alignment and long-lasting support under tough conditions.",
    "alt": "Heavy-Duty Bearing Block for Coir Mill Machinery",
    "slug": "heavy-duty-bearing-block"
  },
  {
    "img": "/images/image2.png",
    "title": "Sallaidai Roller \u2013 Coir Mill Edition",
    "desc": "Specialized roller for fiber alignment and handling in coir processing systems, built for strength and consistency.",
    "alt": "Sallaidai Roller for Coir Mill Fiber Processing",
    "slug": "sallaidai-roller-coir-mill-edition"
  },
  {
    "img": "/images/image3.png",
    "title": "Industrial Roller with Shaft",
    "desc": "Includes integrated shaft, crafted for robust performance in continuous coir processing applications.",
    "alt": "Industrial Roller with Shaft for Continuous Coir Operations",
    "slug": "industrial-roller-with-shaft"
  },
  {
    "img": "/images/image4.png",
    "title": "Cone Conveyor Roller \u2013 8\" & 10\"",
    "desc": "High-precision cone roller available in 8\" and 10\" variants, ensuring smooth material flow and reduced friction.",
    "alt": "Cone Conveyor Roller in 8 Inch and 10 Inch Sizes",
    "slug": "cone-conveyor-roller-8-10"
  },
  {
    "img": "/images/image6.png",
    "title": "Multi-Size Pulley \u2013 8\u00d71B to 24\u00d72B",
    "desc": "Industrial-grade pulley wheels available in multiple sizes: 8\u00d71B, 10\u00d71B, 12\u00d71B, 14\u00d71B, 16\u00d71B, 20\u00d72B, and 24\u00d72B. Designed for vibration-free power transmission, these pulleys offer high strength, dimensional accuracy, and long-lasting performance across various coir mill and industrial machinery applications.",
    "alt": "Multi-Size Industrial Pulley 8\u00d71B to 24\u00d72B",
    "slug": "multi-size-pulley-8x1b-to-24x2b"
  }
]

export default function Products() {
  const [modal, setModal] = useState({ show: false, title: '', desc: '', img: '', alt: '' });
  const [page, setPage] = useState(1);
  const productsPerPage = 9;

  const openImage = (product) => setModal({ show: true, ...product });
  const closeModal = () => setModal({ show: false, title: '', desc: '', img: '', alt: '' });

  const paginatedProducts = allProducts.slice((page - 1) * productsPerPage, page * productsPerPage);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <>
  <Head>
  <title>Gearbox & Coir Mill Machinery Manufacturer | RS Engineering Products</title>
  <meta name="description" content="RS Engineering Products specializes in gearboxes, defibering machines, and coir mill equipment engineered for performance and reliability." />
  <meta name="keywords" content="Gearbox, Coir Machinery, Industrial Equipment, Defibering Machine, Conveyor Roller, Baling Press, RS Engineering" />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="RS Engineering Products | Gearboxes & Coir Mill Machinery" />
  <meta property="og:description" content="Leading manufacturer of coir mill equipment and custom gearboxes in India." />
  <meta property="og:image" content="/images/logo.png" />
  <meta property="og:url" content="https://rs-gear-products.vercel.app" />
  <link rel="canonical" href="https://rs-gear-products.vercel.app" />

  {/* ✅ Google Search Console verification meta tag */}
  <meta name="google-site-verification" content="googled494bffc5af251be.html" />
</Head>

      <Header />
      <main className="container py-5">
        <h1 className="text-center mb-4">Our Products</h1>

        <div className="row g-4">
          {paginatedProducts.map((product, idx) => (
            <div className="col-sm-6 col-md-4" key={idx}>
              <div
                className="card h-100 shadow-sm"
                onClick={() => openImage(product)}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={product.img}
                  alt={product.alt || product.title}
                  width={300}
                  height={200}
                  className="card-img-top object-fit-contain"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-dark">{product.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5 gap-3">
          <button
            className="btn btn-outline-dark"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="align-self-center">Page {page} of {totalPages}</span>
          <button
            className="btn btn-outline-dark"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>

        {modal.show && (
          <div
            className="modal show d-block"
            tabIndex={-1}
            style={{
              backgroundColor: 'rgba(0,0,0,0.8)',
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1050,
            }}
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content p-3">
                <div className="modal-header border-0">
                  <h5 className="modal-title fw-bold text-primary">{modal.title}</h5>
                  <button type="button" className="btn-close" onClick={closeModal}></button>
                </div>
                <div className="modal-body text-center">
                  <Image
                    src={modal.img}
                    alt={modal.alt || modal.title}
                    width={600}
                    height={400}
                    className="img-fluid"
                    style={{ objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.src = '/images/fallback.png';
                    }}
                    priority
                  />
                  <p className="mt-3">{modal.desc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}