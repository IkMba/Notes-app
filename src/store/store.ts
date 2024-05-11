// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./noteSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, notesReducer);

export const store = configureStore({
  reducer: {
    notes: persistedReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
