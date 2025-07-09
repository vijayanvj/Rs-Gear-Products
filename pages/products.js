import Head from 'next/head';
import Header from '@/components/Header';
import { useState } from 'react';
import Image from 'next/image';

const allProducts = [
  {
    img: '/images/image9.png',
    title: 'Crown Type Gearbox – Special 1:5 Model',
    desc: 'Engineered for coir mills, this crown-type gearbox ensures high torque transmission with precision gearing, ideal for intensive load applications.'
  },
  {
    img: '/images/image13.png',
    title: 'Heavy-Duty Auto Feeder – 1:600 Ratio',
    desc: 'Heavy-duty auto feeder unit with double reduction mechanism, delivering smooth, consistent fiber feeding for high-capacity operations.'
  },
  {
    img: '/images/image12.png',
    title: 'Gearbox 400 Series – 1:17 & 1:35 Models',
    desc: 'Heavy-duty gearbox designed for conveyor, bunker, and screener systems, ensuring reliable speed reduction and load handling.'
  },
  {
    img: '/images/image11.png',
    title: 'Gearbox 300 Series – 1:16 & 1:32 Models',
    desc: 'Compact and robust gearbox suitable for bunker, conveyor, and screener drives, offering optimal balance of performance and durability.'
  },
  {
    img: '/images/image1.png',
    title: 'Heavy-Duty Bearing Block',
    desc: 'Precision-crafted bearing block for coir mill operations, designed for seamless alignment and long-lasting support under tough conditions.'
  },
  {
    img: '/images/image2.png',
    title: 'Sallaidai Roller – Coir Mill Edition',
    desc: 'Specialized roller for fiber alignment and handling in coir processing systems, built for strength and consistency.'
  },
  {
    img: '/images/image3.png',
    title: 'Industrial Roller with Shaft',
    desc: 'Includes integrated shaft, crafted for robust performance in continuous coir processing applications.'
  },
  {
    img: '/images/image4.png',
    title: 'Cone Conveyor Roller – 8" & 10"',
    desc: 'High-precision cone roller available in 8" and 10" variants, ensuring smooth material flow and reduced friction.'
  },
  {
    img: '/images/image6.png',
    title: 'Multi-Size Pulley – 8×1B to 24×2B',
    desc: 'Industrial-grade pulley wheels available in multiple sizes: 8×1B, 10×1B, 12×1B, 14×1B, 16×1B, 20×2B, and 24×2B. Designed for vibration-free power transmission, these pulleys offer high strength, dimensional accuracy, and long-lasting performance across various coir mill and industrial machinery applications.'
  },
  {
    img: '/images/image14.png',
    title: 'High-Speed Defibering Machine',
    desc: 'Efficient and rugged machine for bristle fiber extraction, delivering consistent output with minimal fiber damage.'
  },
  {
    img: '/images/image15.png',
    title: 'Precision Coir Screener',
    desc: 'High-capacity screener unit designed to filter and separate coir materials with maximum precision and reliability.'
  },
  {
    img: '/images/image16.png',
    title: 'Fiber Crusher – Heavy Duty',
    desc: 'Industrial-grade crusher engineered to break down husks and coir material into processable fiber for downstream equipment.'
  },
  {
    img: '/images/image17.png',
    title: 'Coir Curling Machine – Rope Maker',
    desc: 'Purpose-built for manufacturing curled coir rope, offering high output and superior curl uniformity.'
  },
  {
    img: '/images/image18.png',
    title: 'Coir Fiber Cleaner',
    desc: 'Essential cleaning unit for removing dust and impurities from coir fiber, improving product quality and efficiency.'
  },
  {
    img: '/images/image19.png',
    title: 'Hydraulic Baling Press',
    desc: 'Hydraulic baling press designed to compact coir fiber and other materials into uniform, transport-ready bundles.'
  }
];


export default function Products() {
  const [modal, setModal] = useState({ show: false, title: '', desc: '', img: '' });
  const [page, setPage] = useState(1);
  const productsPerPage = 9;

  const openImage = (product) => setModal({ show: true, ...product });
  const closeModal = () => setModal({ show: false, title: '', desc: '', img: '' });

  const paginatedProducts = allProducts.slice((page - 1) * productsPerPage, page * productsPerPage);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  return (
    <>
      <Head>
        <title>Products - RS ENGINEERING PRODUCTS</title>
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
                  alt={product.title}
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

        {/* Pagination */}
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

        {/* Modal */}
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
                  <div className="position-relative w-100" style={{ maxWidth: '100%', height: 'auto' }}>
                    <Image
                      src={modal.img}
                      alt={modal.title}
                      width={600}
                      height={400}
                      className="img-fluid"
                      style={{ objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.src = '/images/fallback.png'; // Add a fallback image in public/images
                      }}
                      priority
                    />
                  </div>
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
