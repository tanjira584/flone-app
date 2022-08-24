const getStoredCart = () => {
    let shoppingCart = {};

    let storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const addToDb = (id) => {
    let shoppingCart = {};
    let storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    let quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
export { getStoredCart, addToDb };
