import React from 'react';
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';


const ItemDetailContainer = ({setModalShow, id }) => {

    const {itemIdParams} = useParams();
    const fecthId = itemIdParams ? itemIdParams : id;

    const [modalShowValue, setModalShowValue ] = useState(true);
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState({})

    const hideModal = ()=>{
        if(itemIdParams){
            setModalShowValue(false)
        }else{
            setModalShow(false)
        }
    }

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, 'items', fecthId);
        getDoc(docRef)
            .then((doc)=>{
                setResult({id: doc.id, ...doc.data()});
            })
            .finally(() => {
                setLoading(false)})

        return () => {}
    }, [])


    if (loading || !result) {
        return <Loading />;
    }

    return (
        <div>
            <ItemDetail
                result={result}
                show={modalShowValue}
                onHide={() => hideModal()} />
        </div>

    );
};

export default ItemDetailContainer;