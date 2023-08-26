import axios from "axios";

const brand = {
    namespaced: true,
    state: {
        brandData: [],
    },
    getters: {
        getBrand: (state) => state.brandData,
        // get single produk
        getBrandById: (state) => (brandId) => {
            console.log("BrandId:", brandId);
            console.log("BrandData:", state.brandData );
            const brand = state.brandkData.find((p) => p.id == brandId);
            console.log("brand:", brand);
            return brand
        },

        // // get filter product
        // getProdukByKategori: (state) => (produkKategori) => {
        //     const produk = state.produkData.filter(
        //         (p) => p.kategori == produkKategori
        //     );
        //     return produk
        // }
    },
    actions: {
        async fetchBrand({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-brands"
                );
                commit("SET_BRANDS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        // get single produk
        async fetchSingleBrand({ commit }, brandId) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/all-brands${brandId}`
                );
                commit("SET_SINGLE_BRAND", response.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },

        // async fetchFilterProduk({ commit }, produkKategori) {
        //     try {
        //         const response = await axios.get(
        //             `https://fakestoreapi.com/products/category/${produkKategori}`
        //         );
        //         commit("SET_FILTER_PRODUK", response.data);
        //     } catch (error) {
        //         alert(error);
        //         console.log(error);
        //     }
        // },
     },

    mutations: {
        SET_BRANDS(state, brand) {
            state.brandData = brand;
        },
        SET_SINGLE_BRAND(state, brand) {
            state.singleBrand = brand
        },
    // SET_FILTER_PRODUK(state, produk) {
    //     state.filterProduk = produk
    // }
    },
}

export default brand;