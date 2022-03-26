import React, { useState } from 'react';
import { CartContext } from './CartContext';


const CustomProvider = ({ children }) => {

    const [cartProduct, setCartProduct] = useState([])

    const addItem = (item) => {
        setCartProduct([...cartProduct, item])
    }

    const removeItem = (id) => {
        setCartProduct(cartProduct.filter((product) => product.id !== id))
    }

    const clear = () => {
        setCartProduct([])
    }

    const totalItem = () =>{
        return cartProduct.reduce((acc, producto) => acc + producto.initial, 0)
    }

    const totalprice = () =>{
        return cartProduct.reduce((acc, producto) => acc + producto.price*producto.initial, 0)
    }

    const isInCart = (id) => {
        return cartProduct.some((product) => product.id === id)
    }


    console.log(cartProduct);
    return (
        <CartContext.Provider value={{ cartProduct, addItem, removeItem, clear, isInCart, totalItem, totalprice }}>
            {children}
        </CartContext.Provider>
    );
};

export default CustomProvider;