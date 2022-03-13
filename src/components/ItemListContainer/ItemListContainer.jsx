import React from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import useFetch from "../hooks/useFetch";
import ItemDetail from '../ItemDetail/ItemDetail';

//contenedor del main
const ItemListContainer = ({ title }) => {

    const url = 'https://60a6e6f9b970910017eb2862.mockapi.io/users/articles'
    const data = useFetch(url)

    return (
        <div className="itemList-Container">
            <h1>{title}</h1>
            <ItemList data={data} />
            {/* <ItemDetail/> */}
        </div>
    );
};

export default ItemListContainer;