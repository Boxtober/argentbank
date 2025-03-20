import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null, // initialisé à null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload; // Maj du token dans le state
      console.log("set token ici : ", action.payload);
    },
    clearToken: (state) => {
      state.token = null; // efface le token à la déconnexion
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
