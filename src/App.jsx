import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./component/Home";
import Restraunt from "./component/Restraunt";
import ResMenu from "./component/ResMenu";
import SearchFood from "./component/SearchFood";
import ResHomeHeader from "./component/ResHomeHeader";
import {store} from "./stored/stores";
import { Provider } from "react-redux";
import Checkout from "./component/Checlout";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export default function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ResHomeHeader></ResHomeHeader>}>
          <Route path="/restraunt" element={<Restraunt />} />
          <Route path="/city/delhi/:id" element={<ResMenu />} />
          <Route path="/city/delhi/:id/search" element={<SearchFood />} />
        </Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

