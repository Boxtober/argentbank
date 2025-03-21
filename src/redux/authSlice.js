import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  firstName: "",
  // initialisé à null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
    logout: (state) => {
      state.token = null;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
  },
});

export const { setToken, clearToken, logout, setFirstName } = authSlice.actions;
export default authSlice.reducer;

//utiliser pour nom et prenom
//stock token dans localstorage
//le fichier qui appel le service enregistre le token en localstorage
// verfier presence du token sur chaque page avec besoin d'etre connecter
//
