import React, { useState } from 'react';
import './ItemDetailContainer.css'
import useFetch from '../hooks/useFetch';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading/Loading';


const ItemDetailContainer = ({ modalShow, setModalShow, id }) => {
    const url = 'https://60a6e6f9b970910017eb2862.mockapi.io/users/articles/'
    const urlId = `${url}${id}`
    const data = useFetch(urlId)

    if (data.loading || !data.results) {
        return <Loading />;
    }
    return (
        <div>
            <ItemDetail
                data={data?.results}
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </div>

    );
};

export default ItemDetailContainer;