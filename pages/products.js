import Head from 'next/head';
import Header from '@/components/Header';
import { useState } from 'react';
import Image from 'next/image';

const allProducts = [
  { img: '/images/image9.png', title: 'Crown Type Special (1:5)', desc: 'Specially made for Coir Mills.' },
  { img: '/images/image13.png', title: 'Auto Feeder (1:600), Heavy Type (1:600)', desc: 'Double reduction drive.' },
  { img: '/images/image12.png', title: 'Gear Box 400 Model (1:17) & (1:35)', desc: 'For Conveyor, Bunker, Screener.' },
  { img: '/images/image11.png', title: 'Gear Box 300 Model (1:16) & (1:32)', desc: 'For Conveyor, Bunker, Screener.' },
  { img: '/images/image1.png', title: 'Bearing Block', desc: 'Customized bearing block for Coir Mills.' },
  { img: '/images/image2.png', title: 'Sallaidai Roller', desc: 'Designed for Coir Mills.' },
  { img: '/images/image3.png', title: 'Specialized Roller', desc: 'Includes shaft for heavy-duty use.' },
  { img: '/images/image4.png', title: 'Conveyor Cone Roller', desc: 'Available in 8" and 10" sizes.' },
  { img: '/images/image6.png', title: 'Pulley', desc: 'Sizes: 8×1B, 10×1B, 12×1B, 14×1B, 16×1B, 20×2B, 24×2B.' },
  { img: '/images/image14.png', title: 'Defibering Machine', desc: 'Efficient processing of bristle fibers.' },
  { img: '/images/image15.png', title: 'Screener', desc: 'Precision screening for coir material.' },
  { img: '/images/image16.png', title: 'Crusher', desc: 'Heavy-duty crushing for coir operations.' },
  { img: '/images/image17.png', title: 'Coir Curling Machine', desc: 'Used for curled coir rope manufacturing.' },
  { img: '/images/image18.png', title: 'Cleaner', desc: 'Removes impurities from coir fiber.' },
  { img: '/images/image19.png', title: 'Baling Press', desc: 'Suitable for packing coir and other materials.' }
];

// const allProducts = [
//   { img: '/images/image9.png', title: 'Crown Type Special (1:5)', desc: 'Specialy made for Coir Mill.' },
//   { img: '/images/image12.png', title: 'Auto Feeder (1:600) , heavy type ( 1:600)', desc: 'Double Reduction.' },
//   { img: '/images/image11.png', title: '', desc: 'Conveyor, Bunker , Scrrener.' },
//   { img: '/images/image13.png', title: 'Gear Box 300 Model (1:16) & (1:32)', desc: 'Conveyor ,Bunker , Scrrener..' },
//   { img: '/images/image1.png', title: 'Bearing Block', desc: 'Customized Bearing Block for Coir Mils.' },
//   { img: '/images/image2.png', title: 'Sallaidai Roller', desc: 'For Coir Mils.' },
//   { img: '/images/image3.png', title: 'Specialiced Roller', desc: 'With Shaft.' },
//   { img: '/images/image4.png', title: 'Conveyor Cone Roller', desc: '8 Inch , 10 Inch .' },
//   { img: '/images/image6.png', title: 'Pully ', desc: '(8*1 B) ,(10*1 B),(12*1 B),(14*1 B),(16*1 B),(20*2 B),(24*2 B)' },
//   { img: '/images/image14.png', title: 'DE Fibring Machine ', desc: 'For Bristle Fibers.' },
//   { img: '/images/image15.png', title: 'Screener', desc: '' },
//   { img: '/images/image16.png', title: 'Crusher', desc: '' },
//   { img: '/images/image17.png', title: 'Coir Curling Machine', desc: '' },
//   { img: '/images/image18.png', title: 'Cleaner', desc: '' },
//   { img: '/images/image19.png', title: 'Baling Press', desc: 'Special for any Items.' },
// ];

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
