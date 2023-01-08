import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    userData: [],
  },
  reducers: {
    setUser(state, action) {
      console.log(action.payload);
      state.id = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
  },
});
export default userSlice;
export const userActions = userSlice.actions;
