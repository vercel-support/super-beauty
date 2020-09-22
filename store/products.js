export const state = () => ({
  products: [
    {
      id: '1',
      sale: true,
      new: true,
      isInWishlist: true,
      label: {
        type: 'promo',
        text: '-15%',
      },
      productImage: '/images/product_card/product@2x.png',
      productTitle: 'NARS',
      productReference: 'Orgasm Eyeshadow Palette',
      productDescription:
        'Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.',
      productSizes: ['1.2g', '1.4g'],
      priceTitle: 'Precio al por mayor',
      price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.3,
    },
    {
      id: '2',
      sale: true,
      new: true,
      isInWishlist: true,
      label: {
        type: 'promo',
        text: '-15%',
      },
      productImage: '/images/product_card/product@2x.png',
      productTitle: 'NARS',
      productReference: 'Orgasm Eyeshadow Palette',
      productDescription:
        'Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.',
      productSizes: ['1.2g', '1.4g'],
      priceTitle: 'Precio al por mayor',
      price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.3,
    },
    {
      id: '3',
      sale: true,
      new: true,
      isInWishlist: true,
      label: {
        type: 'promo',
        text: '-15%',
      },
      productImage: '/images/product_card/product@2x.png',
      productTitle: 'NARS',
      productReference: 'Orgasm Eyeshadow Palette',
      productDescription:
        'Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.',
      productSizes: ['1.2g', '1.4g'],
      priceTitle: 'Precio al por mayor',
      price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.3,
    },
    {
      id: '4',
      sale: true,
      new: true,
      isInWishlist: true,
      label: {
        type: 'promo',
        text: '-15%',
      },
      productImage: '/images/product_card/product@2x.png',
      productTitle: 'NARS',
      productReference: 'Orgasm Eyeshadow Palette',
      productDescription:
        'Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.',
      productSizes: ['1.2g', '1.4g'],
      priceTitle: 'Precio al por mayor',
      price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.3,
    },
    {
      id: '5',
      sale: true,
      new: true,
      isInWishlist: true,
      label: {
        type: 'promo',
        text: '-15%',
      },
      productImage: '/images/product_card/product@2x.png',
      productTitle: 'NARS',
      productReference: 'Orgasm Eyeshadow Palette',
      productDescription:
        'Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.',
      productSizes: ['1.2g', '1.4g'],
      priceTitle: 'Precio al por mayor',
      price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.3,
    },
    {
      id: '6',
      sale: true,
      new: true,
      isInWishlist: true,
      label: {
        type: 'promo',
        text: '-15%',
      },
      productImage: '/images/product_card/product@2x.png',
      productTitle: 'NARS',
      productReference: 'Orgasm Eyeshadow Palette',
      productDescription:
        'Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.',
      productSizes: ['1.2g', '1.4g'],
      priceTitle: 'Precio al por mayor',
      price: 150000,
      priceTitleSecondary: 'precio al público',
      priceSecondary: 250000,
      rating: 4.3,
    },
  ],
});
export const mutations = {};
export const actions = {};

export const getters = {
  getProducts(state) {
    return state.products;
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id);
  },
};
