import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "room",
  initialState: {
    name: "",
    description: "",
    date: "",
    budget: "",
  },
  reducers: {
    setRoomData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setRoomData } = roomSlice.actions;
export default roomSlice.reducer;
