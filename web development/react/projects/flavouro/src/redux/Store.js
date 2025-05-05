import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "./slices/CardSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";


const Store = configureStore({
    reducer: {
        cart: cartSlice,
        category: CategorySlice,
        search: SearchSlice,
    },
});



export default Store;