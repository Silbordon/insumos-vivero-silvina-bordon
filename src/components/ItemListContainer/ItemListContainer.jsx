import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState} from 'react';
import ItemList from '../ItemList/ItemList';
import useFetch from "../hooks/useFetch";


//contenedor del main
const ItemListContainer = ({ title }) => {

    const [initial, setInitial] = useState(1)

    const url = 'https://60a6e6f9b970910017eb2862.mockapi.io/users/articles'
    const data = useFetch(url)

    return (
        <div className="itemList-Container">
            <h1>{title}</h1>
            <ItemCount
                stock={5}
                initial={initial}
                setInitial={setInitial}
            />
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;