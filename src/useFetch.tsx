import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    const loadData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);

    }

    useEffect(() => {
        loadData();
    }, [url]);

    return data;
}

export default useFetch;