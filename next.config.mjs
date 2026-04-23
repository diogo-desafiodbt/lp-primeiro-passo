/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Evita o pipeline `/_next/image` (fetch interno + sharp), que em alguns
    // ambientes/versões de Node devolve buffer vazio e as imagens somem.
    // As URLs continuam a ser `/images/...` servidas a partir de `public/`.
    unoptimized: true,
  },
};

export default nextConfig;
