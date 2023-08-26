import { createStore } from "vuex";
import auth from "./modules/auth";
import brand from "./modules/brand";
import category from "./modules/category";
import product from "./modules/product";
import cart from "./modules/cart";

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brand,
        category,
        product,
        cart
    },
});

export default store;