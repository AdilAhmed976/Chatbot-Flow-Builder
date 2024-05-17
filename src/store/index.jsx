import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./reducers";

const persistConfig = {
  key: "chat-flow-builder",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);
let persistor = persistStore(store);
// persistor.purge();
export { store, persistor };
