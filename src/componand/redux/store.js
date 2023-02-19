import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./routing";
export default configureStore({
    reducer:{
        counter:counterSlice,
    },
});
