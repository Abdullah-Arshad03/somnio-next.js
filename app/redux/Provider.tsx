"use client";

import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface props {
  children: ReactNode;
}

const Providers = ({ children }: props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
