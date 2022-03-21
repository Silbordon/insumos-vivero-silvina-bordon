import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetch = (url) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const {catName} = useParams()

    useEffect(() => {
        setTimeout(() => {
            const getData = () => {
                fetch(url)
                    .then(response => response.json())
                    .then(obj => {
                        setResults(obj)
                        setLoading(false)
                    })
                    .catch(err => setLoading(false))
            }
            getData();
        }, 2000);
    }, [catName])

    return { results, loading, catName };
}

export default useFetch;