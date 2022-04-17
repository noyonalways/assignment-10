import { useEffect, useState } from 'react';

const useFetchData = (fetchUrl) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => setData(data));
    },[fetchUrl]);


    return [data, setData]
};

export default useFetchData;