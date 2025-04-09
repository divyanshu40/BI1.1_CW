import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((responseData) => setData(responseData))
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [url]);
    return { data, loading, error };
}

export default useFetch