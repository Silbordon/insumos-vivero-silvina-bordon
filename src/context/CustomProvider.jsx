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


    const isInCart = (id) => {
        return cartProduct.some((product) => product.id === id)
    }


    console.log(cartProduct);
    return (
        <CartContext.Provider value={{ cartProduct, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CustomProvider;