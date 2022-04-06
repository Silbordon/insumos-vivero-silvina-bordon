import React from 'react';
import { collection, addDoc, Timestamp, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import Swal from 'sweetalert2'


const orderGenerated = async(valuesInput, cartProduct, totalprice,setOrderId,clear) => {


    const order = {
        buyer: valuesInput,
        items: cartProduct,
        total: totalprice(),
        dateHs : Timestamp.fromDate(new Date())
    }
    const batch = writeBatch(db);
    const orderRef = collection(db, 'orders');
    const allProductRef = collection(db, 'items')

    const q = query(allProductRef, where(documentId(), 'in', cartProduct.map((el) => el.id)))
    const products = await getDocs(q);
    const outstock = [];

   products.docs.forEach((doc) =>{
        const item = cartProduct.find((el) => el.id === doc.id)

        if(doc.data().stock >= item.initial){
            batch.update(doc.ref, {
                stock: doc.data().stock - item.initial
            })
        }else{
            outstock.push(item)
        }
    })

    if(outstock.length === 0){
        addDoc(orderRef, order)
            .then((doc) =>{
                batch.commit()
                setOrderId(doc.id)
                clear()
            })
    }else{
        Swal.fire('CUIDADO', 'Hay productos sin stock, te solicitamos revises tus productos seleccionados', 'warning')
    }
}


export default orderGenerated;