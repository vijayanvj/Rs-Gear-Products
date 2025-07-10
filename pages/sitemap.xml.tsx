import { GetServerSideProps } from 'next';

const baseUrl = 'https://rs-gear-products.vercel.app';

const products = [
  'crown-type-gearbox-special-1-5-model',
  'heavy-duty-auto-feeder-1-600-ratio',
  'gearbox-400-series-1-17-1-35-models',
  'gearbox-300-series-1-16-1-32-models',
  'heavy-duty-bearing-block',
  'sallaidai-roller-coir-mill-edition',
  'industrial-roller-with-shaft',
  'cone-conveyor-roller-8-10',
  'multi-size-pulley-8x1b-to-24x2b',
  'high-speed-defibering-machine',
  'precision-coir-screener',
  'fiber-crusher-heavy-duty',
  'coir-curling-machine-rope-maker',
  'coir-fiber-cleaner',
  'hydraulic-baling-press'
];

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = [
    '',
    'products',
    'about',
    'contact',
    ...products.map((slug) => `products/${slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(
          (url) => `
          <url>
            <loc>${baseUrl}/${url}</loc>
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
            <priority>${url === '' ? '1.0' : '0.7'}</priority>
          </url>
        `
        )
        .join('')}
    </urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
