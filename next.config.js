module.exports = {
  async redirects() {
    return [
      {
        source: '/product',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/recipe',
        destination: '/recipes',
        permanent: true,
      },
    ]
  },
}