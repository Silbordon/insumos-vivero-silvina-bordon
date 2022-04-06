import React from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../utils/firebase'
import { collection, getDocs } from '@firebase/firestore';
import { query, where } from 'firebase/firestore';

const ItemListContainer = () => {

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const { catName } = useParams()

    useEffect(() => {
        setLoading(true)
        const productRef = collection(db, 'items');
        const q = catName ? query(productRef, where('categories', "==", catName)) : productRef

        getDocs(q)
            .then((resp) => {
                setResults(resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                    }))
            })
            .finally(() => {
                setLoading(false)
            })
    }, [catName])


    return (
        <div className="itemList-Container">
            <h1 className="title-categories">{catName ? catName : null}</h1>
            <ItemList 
                results={results}
                loading={loading} 
            />
        </div>
    );
};

export default ItemListContainer;