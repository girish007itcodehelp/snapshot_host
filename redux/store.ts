import {
  Action, configureStore,
  ThunkAction
} from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
// import { productsSlice } from "./slices/homeProductsSlice";
// import { pokemonSlice } from "./slices/pokemonSlice";


export let store: any = null;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;



export default function getStore(incomingPreloadState?: RootState) {
  store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      // pokemon: pokemonSlice.reducer,
      // getProducts: productsSlice.reducer
    },
    devTools: true,
    preloadedState: incomingPreloadState,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     serializableCheck: {
    //       // Ignore these action types
    //       ignoredActions: ['home/products/fulfilled'],
    //       // Ignore these field paths in all actions
    //       ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    //       // Ignore these paths in the state
    //       ignoredPaths: ['items.dates'],
    //     },
    //   }),
  });
  return store;
}
