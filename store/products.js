export const state = () => ({
    products: [
        {
            id: "1",
            sale: true,
            new: false,
            topSale: true,
            isSustainable: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 1,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 100,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "2",
            sale: true,
            new: false,
            isSustainable: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "3",
            sale: true,
            isSustainable: true,
            new: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 1,
            subCategoryVariationId: 2,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "4",
            sale: false,
            isSustainable: false,
            new: true,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "new",
                text: "New",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,

            subCategoryId: 3,
            subCategoryVariationId: 2,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "5",
            sale: true,
            isSustainable: false,
            new: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "new",
                text: "New",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 3,
            subCategoryVariationId: 3,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "6",
            sale: true,
            isSustainable: true,
            new: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "new",
                text: "New",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,

            subCategoryId: 1,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 2.3,
            brandId: 1,
        },
        {
            id: "7",
            sale: true,
            isSustainable: false,
            new: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 3.3,
            brandId: 1,
        },
        {
            id: "8",
            sale: true,
            isSustainable: true,
            new: true,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 30000,
            discountedPrice: 400,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "9",
            sale: true,
            new: true,
            isSustainable: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 12000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "10",
            sale: true,
            new: false,
            isSustainable: true,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 1000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "11",
            sale: true,
            new: false,
            isSustainable: false,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 23000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
        {
            id: "12",
            sale: true,
            new: false,
            isSustainable: true,
            topSale: true,
            recomended: true,
            isInWishlist: false,
            label: {
                type: "promo",
                text: "-15%",
            },
            productImage: "/images/product_card/product.png",
            productImages: [
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
                "/images/product_card/product@2x.png",
            ],
            categoryId: 1,
            subCategoryId: 2,
            subCategoryVariationId: 1,
            productTitle: "NARS",
            productReference: "Orgasm Eyeshadow Palette",
            productDescription:
                "Una paleta de sombras con 4 tonos ámbar que ofrece incontables combinaciones. Cuenta con una variedad de texturas que van de mate a satinado y escarchado para crear looks de día y de noche. Los colores son saturados, suaves y uniformes, y vienen en un empaque compacto para facilitar su transporte.",
            productSizes: ["1.2g", "1.4g"],
            priceTitle: "Precio al por mayor",
            price: 3000,
            discountedPrice: 150000,
            priceTitleSecondary: "precio al público",
            priceSecondary: 250000,
            discountedPriceSecondary: 200000,
            rating: 4.3,
            brandId: 1,
        },
    ],
})
export const mutations = {
    setWishlistStatus(state, payload) {
        const productItem = state.products.find(
            (product) => product.id === payload.id
        )
        productItem.isInWishlist = payload.value
    },
}
export const actions = {
    updateWishlist({ commit }, payload) {
        // Call api  -- remember async await as this must
        // be asyncronous.
        commit("setWishlistStatus", payload)
    },
}
export const getters = {
    getProducts(state) {
        return state.products
    },
    getProductById: (state) => (id) => {
        return state.products.find((product) => product.id === id)
    },
    getRecomendedProducts(state) {
        if (state.products) {
            return state.products.filter((product) => {
                return product.recomended === true
            })
        }
    },
    getProductsInSale(state) {
        if (state.products) {
            return state.products.filter((product) => {
                return product.sale === true
            })
        }
    },
    getTopSaleProducts(state) {
        if (state.products) {
            return state.products.filter((product) => {
                return product.topSale === true
            })
        }
    },
    getProductsByCategory: (state) => (categoryId) => {
        return state.products.filter(
            (product) => product.categoryId === categoryId
        )
    },
    filterProductsByVariant: (state) => (
        categoryId,
        subCategoryId,
        variationId,
        products = state.products
    ) => {
        return products.filter(
            (product) =>
                product.categoryId === categoryId &&
                product.subCategoryId === subCategoryId &&
                product.subCategoryVariationId === variationId
        )
    },
    filterProductsByBrand: (state) => (
        categoryId,
        brandId,
        products = state.products
    ) => {
        return products.filter(
            (product) =>
                product.categoryId === categoryId && product.brandId === brandId
        )
    },

    getProductsByRatingRange: (state) => (raitingCeil, raitingFloor) => {
        return state.products.filter(
            (product) =>
                product.rating <= raitingCeil && product.rating >= raitingFloor
        )
    },

    findLowestAndHighestPrices: (state) => (productsArray) => {
        const minValue = (products, fn) =>
            Math.min(
                ...products.map(
                    typeof fn === "function" ? fn : (val) => val[fn]
                )
            )
        const maxValue = (products, fn) =>
            Math.max(
                ...products.map(
                    typeof fn === "function" ? fn : (val) => val[fn]
                )
            )
        return {
            min: minValue(productsArray, "price"),
            max: maxValue(productsArray, "price"),
        }
    },
}
