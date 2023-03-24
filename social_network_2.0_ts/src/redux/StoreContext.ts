import React from "react";
import {StoreType} from "./store";
import {store} from "./redux-store";

export const StoreContext = React.createContext<StoreType>(store)