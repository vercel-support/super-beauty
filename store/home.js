export const state = () => ({
  banners: {
    carousel: {
      type: 'promo',
      data: {
        caption: {
          title: 'Brow Powder Duo',
          discount: '-50%',
          description: '',
          button: {
            text: 'Ver más',
            url: '/productos',
          },
        },
        image: {
          src: '/images/banner/banner_image_main.png',
        },
        button: {
          text: 'Ver más',
          url: '/products',
        },
      },
    },
    promo_1: {
      type: 'promo',
      data: {
        caption: {
          title: 'Brow Powder Duo',
          discount: '-50%',
          description: '',
          button: {
            text: 'Ver más',
            url: '/productos',
          },
        },
        image: {
          src: '/images/banner/banner_image_promo.png',
        },
        button: {
          text: 'Ver más',
          url: '/products',
        },
      },
    },
    promo_2: {
      type: 'promo',
      data: {
        caption: {
          title: 'Brow Powder Duo',
          discount: '-50%',
          description: '',
          button: {
            text: 'Ver más',
            url: '/productos',
          },
        },
        image: {
          src: '/images/banner/banner_image_promo.png',
        },
        button: {
          text: 'Ver más',
          url: '/products',
        },
      },
    },
    promo_3: {
      type: 'promo-large',
      data: {
        caption: {
          title: 'AHORRA HASTA UN 50% - 30% - 15%',
          description:
            'Envios gratis a nivel nacional, por compras superiores a $80.000',
        },
        image: {
          src: '/images/banner/banner_image_promo_large.png',
        },
        button: {
          text: 'Ver más',
          url: '/products',
        },
      },
    },
  },
});
export const mutations = {};
export const actions = {
  // For future use.
};

export const getters = {
  getBanners(state) {
    return state.banners;
  },
};
