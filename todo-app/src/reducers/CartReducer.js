export const CartReducer = (cart, action) => {
  if (action.type === "ADDED") {
    const existInCart = cart.find((ci) => ci.product.id === action.payload.id);

    if (existInCart) {
      return cart.map((ci) => {
        if (ci.product.id === action.payload.id)
          return { ...ci, amount: ci.amount + 1 };
        return ci;
      });
    } else {
      return [...cart, new CartItem(action.payload, 1)];
    }
  }

  if (action.type === "REMOVED") {
  }

  if (action.type === "INCREASED") {
  }

  if (action.type === "DECREASED") {
  }
};
