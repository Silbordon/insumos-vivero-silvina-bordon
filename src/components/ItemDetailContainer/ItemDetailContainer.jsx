import React from 'react';
import './ItemDetailContainer.css'
import useFetch from '../hooks/useFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const ItemDetailContainer = ({ modalShow, setModalShow, id }) => {

    const url = 'https://60a6e6f9b970910017eb2862.mockapi.io/users/articles/'

    const {itemIdParams} = useParams();
    const fecthId = itemIdParams ? itemIdParams : id;

    const [modalShowValue, setModalShowValue ] = useState(true);

    const hideModal = ()=>{
        if(itemIdParams){
            setModalShowValue(false)
        }else{
            setModalShow(false)
        }
    }

    const urlId = `${url}${fecthId}`
    const data = useFetch(urlId)

    if (data.loading || !data.results) {
        return <Loading />;
    }

    return (
        <div>
            <ItemDetail
                data={data?.results}
                show={modalShowValue}
                onHide={() => hideModal()} />
        </div>

    );
};

export default ItemDetailContainer;