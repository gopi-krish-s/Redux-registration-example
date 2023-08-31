import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "../Redux/enterslice";

export default configureStore({
  reducer: {
    user:Counterslice

  },
});
