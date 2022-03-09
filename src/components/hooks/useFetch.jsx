import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);


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
    }, [url])

    return { results, loading };
}

export default useFetch;