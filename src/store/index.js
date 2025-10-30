import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "../store/roomSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});
