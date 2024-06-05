const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAuth: false,
  userName: "",
  userPassword: "",
  activeHomePage: false,
  activeContactPage: false,
  activeAboutPage: false,
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
        (state.userName = action.payload.userName),
        (state.userPassword = action.payload.userPassword);
    },
    logOut: (state) => {
      state.isAuth = false;
      state.userName = "";
      state.userPassword = "";
      state.activeHomePage = false;
      state.activeContactPage = false;
      state.activeAboutPage = false;
    },
    homePage: (state, action) => {
      state.activeHomePage = true;
      state.activeContactPage = false;
      state.activeAboutPage = false;
    },
    conPage: (state, action) => {
      state.activeHomePage = false;
      state.activeContactPage = true;
      state.activeAboutPage = false;
    },
    aboutPage: (state, action) => {
      state.activeHomePage = false;
      state.activeContactPage = false;
      state.activeAboutPage = true;
    },
    toggleAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { logIn, logOut, homePage, conPage, aboutPage,toggleAuth } = auth.actions;
export default auth.reducer;
