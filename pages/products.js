import Head from 'next/head';
import Header from '@/components/Header';
import { useState } from 'react';
import Image from 'next/image';

const allProducts = [
  { img: '/images/image1.png', title: 'Gearbox Model A', desc: 'Heavy-duty gearbox built for high torque demands.' },
  { img: '/images/image2.png', title: 'Gearbox Model B', desc: 'Compact gearbox for textile and automation industries.' },
  { img: '/images/image3.png', title: 'Roller Shaft', desc: 'Precision roller shaft with minimal vibration.' },
  { img: '/images/image4.png', title: 'Motor Housing', desc: 'Aluminum motor housing for optimal heat dissipation.' },
  { img: '/images/image5.png', title: 'Coupling Unit', desc: 'Flexible coupling to dampen vibration and noise.' },
  { img: '/images/image6.png', title: 'Gear Shaft Assembly', desc: 'Integrated gear-shaft system for minimal backlash.' },
  { img: '/images/image7.png', title: 'Gearbox Casing', desc: 'Cast iron casing for heavy-duty gearbox support.' },
  { img: '/images/image8.png', title: 'Motor Base', desc: 'Robust motor base with precision mounting.' },
  { img: '/images/image9.png', title: 'Drive Pulley', desc: 'Steel pulley for belt-driven systems.' },
  { img: '/images/image11.png', title: 'Crusher Frame', desc: 'Support frame for industrial crushers.' },
  { img: '/images/image12.png', title: 'Drive Housing', desc: 'Precision drive housing for shaft alignment.' },
  { img: '/images/image13.png', title: 'Crusher Base', desc: 'Solid base for heavy crusher machinery.' },
  { img: '/images/image14.png', title: 'Pinion Stand', desc: 'Pinion support stand for gear engagement.' },
  { img: '/images/image15.png', title: 'Motor Mount', desc: 'Steel motor mount with shock isolation.' },
  { img: '/images/image16.png', title: 'Hydraulic Head', desc: 'Hydraulic head for fluid control.' },
  { img: '/images/image17.png', title: 'Crusher Hopper', desc: 'Feed hopper for efficient material flow.' },
  { img: '/images/image18.png', title: 'Gear Wheel', desc: 'Precision-cut gear wheel with hardened teeth.' },
  { img: '/images/image19.png', title: 'End Bearing Block', desc: 'Bearing block for rotational shafts.' },
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
              <div className="card h-100 shadow-sm" onClick={() => openImage(product)} style={{ cursor: 'pointer' }}>
                <Image src={product.img} alt={product.title} width={300} height={200} className="card-img-top object-fit-contain" />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-5 gap-3">
          <button className="btn btn-outline-dark" onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}>Previous</button>
          <span className="align-self-center">Page {page} of {totalPages}</span>
          <button className="btn btn-outline-dark" onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages}>Next</button>
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
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
    >
      <div className="modal-content p-3">
        <div className="modal-header border-0">
          <h5 className="modal-title">{modal.title}</h5>
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
                e.currentTarget.src = '/images/fallback.png'; // add a fallback image in public/images
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
