import React, { createContext, useEffect, useState } from "react";

export let cartContext = createContext(); //Content Name

export default function MyGlobalData({ children }) {
  let [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );

  let obj = {
    cart,
    setCart,
  };

  useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, [cart]);
  return <cartContext.Provider value={obj}>{children}</cartContext.Provider>;
}
