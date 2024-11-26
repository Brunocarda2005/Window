const nextConfig = {
  reactStrictMode: true, // Habilitar modo estricto de React para ayudar en la depuración

  images: {
    unoptimized: true, // Desactivar optimización de imágenes si no la necesitas
  },

  // Si estás usando el App Directory (nuevo sistema de rutas de Next.js)
  experimental: {
    appDir: true, // Asegúrate de que el App Directory esté habilitado si usas esta estructura
  },
};

module.exports = nextConfig;
