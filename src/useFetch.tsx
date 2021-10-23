import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
    
        }
        loadData();
    }, [url]);

    return data;
}

export default useFetch;