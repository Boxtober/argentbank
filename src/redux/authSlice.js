import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  firstName: "",
  lastName: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setProfile: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
    },
    logout: (state) => {
      state.token = null;
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setProfile, logout } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   token: null,
//   firstName: "",
//   // initialisé à null
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setToken: (state, action) => {
//       state.token = action.payload;
//     },
//     clearToken: (state) => {
//       state.token = null;
//     },
//     logout: (state) => {
//       state.token = null;
//     },
//     setFirstName: (state, action) => {
//       state.firstName = action.payload;
//     },
//   },
// });

// export const { setToken, clearToken, logout, setFirstName } = authSlice.actions;
// export default authSlice.reducer;

//utiliser pour nom et prenom
//stock token dans localstorage
//le fichier qui appel le service enregistre le token en localstorage
// verfier presence du token sur chaque page avec besoin d'etre connecter
