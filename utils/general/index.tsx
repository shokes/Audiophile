export const addCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

//    const { id, amount, product } = action.payload;

//    const tempItem = state.cart.find((i) => i.id === id);
//    if (tempItem) {
//      const tempCart = state.cart.map((cartItem) => {
//        if (cartItem.id === id) {
//          let newAmount = cartItem.amount + amount;
//          if (newAmount > cartItem.max) {
//            newAmount = cartItem.max;
//          }
//          return { ...cartItem, amount: newAmount };
//        } else {
//          return cartItem;
//        }
//      });

//      return {
//        ...state,
//        cart: tempCart,
//      };
//    } else {
//      const newItem = {
//        id: id,
//        name: product.name,
//        amount,
//        image: product.image,
//        price: product.price,
//        max: product.stock,
//      };
//      return {
//        ...state,
//        cart: [...state.cart, newItem],
//        tempStock: 1,
//      };
//    }
//  }
