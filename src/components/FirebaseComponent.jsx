

//Ejemplo en clase de firebase

import React from 'react';
import {collection, getDocs, getDoc, doc} from 'firebase/firestore'
import { useEffect } from 'react';
import {bd} from '../../src/utils/firebase'

const FirebaseComponent = () => {

    const [productos, setProduntos] = useState([]);

useEffect(() =>{
    const getData = async() =>{
        const query = collection(bd, 'items');
        const responde = await getDocs(query);
        console.log(responde);
        console.log(responde.docs.id);
        console.log(responde.docs[0].data());

        // const newDoc= {
        //     id : doc.id,
        //     title: "hola",
        // }
        const dataitems = responde.docs.map(doc =>{return {id: doc.id, ...doc.data()}});
        console.log(dataitems);

        //peticion a 1 doc

        const queryDoc = doc(bd, 'items', 'id');
        const responseDoc = await getDoc(queryDoc);
        const datadoc = responseDoc.data();
        console.log(datadoc);
        const newdoc = {id: responseDoc.id, ...datadoc};
        console.log(newdoc);
    }
    getData();
},[])

    return (
        <div>
            hola
        </div>
    );
};

export default FirebaseComponent;