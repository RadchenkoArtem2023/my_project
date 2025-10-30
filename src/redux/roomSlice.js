import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomName: "",
  minParticipants: 0,
  maxParticipants: 0,
  budget: 0,
  currency: "UAH",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  wishMode: "", // "ideas" або "surprise"
  wishes: [], // список бажань
  surprise: "", // сюрприз
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomData: (state, action) => {
      Object.assign(state, action.payload);
    },
    setWishMode: (state, action) => {
      state.wishMode = action.payload;
    },
    addWish: (state, action) => {
      if (state.wishes.length < 5) {
        state.wishes.push(action.payload);
      }
    },
    setSurprise: (state, action) => {
      state.surprise = action.payload;
    },
  },
});

export const { setRoomData, setWishMode, addWish, setSurprise } =
  roomSlice.actions;
export default roomSlice.reducer;
