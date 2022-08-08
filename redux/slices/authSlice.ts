// import baseAxios from "@baseApi/base";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../firebase/clientApp";
import { RootState } from "redux/store";
import baseAxios from "@baseApi/base";



interface AuthInterface {
    isAuthenticated: boolean,
    loading: boolean,
    user: object,
}

const initialState: AuthInterface = {
    isAuthenticated: false,
    loading: false,
    user: {}
};


// export const loginUser = createAsyncThunk(
//     "auth/google",
//     async ({ username, password }) => {
//         await createAccount(username, password);
//     }
// );


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginUser: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
            state.isAuthenticated = true

        },
        setLogout: (state, { payload }) => {
            state.loading = payload.loading;
            state.user = payload.user;
            state.isAuthenticated = payload.isAuthenticated

        },

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginUser.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(loginUser.fulfilled, (state, { payload }) => {
    //             state.loading = false;
    //             state.isAuthenticated = true;
    //             state.user = {payload};
    //         })
    //         .addCase(loginUser.rejected, (state) => {
    //             state.loading = false;
    //             state.isAuthenticated = false;
    //         });
    // },

});

export const authState = (state: RootState) => state.auth;

export const { setLoginUser, setLogout } = authSlice.actions;
