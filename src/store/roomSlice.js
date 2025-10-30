import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roomName: "",
  participantsCount: 1,
  participants: [],
};

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomName: (state, action) => {
      state.roomName = action.payload;
    },
    increaseCount: (state) => {
      state.participantsCount += 1;
    },
    decreaseCount: (state) => {
      if (state.participantsCount > 1) {
        state.participantsCount -= 1;
      }
    },
    addParticipant: (state, action) => {
      state.participants.push(action.payload);
    },
  },
});

export const { setRoomName, increaseCount, decreaseCount, addParticipant } =
  roomSlice.actions;

export default roomSlice.reducer;
