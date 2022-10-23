import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const axiosInst = axios.create({ baseURL: process.env.REACT_APP_API_URL })

    useEffect(() => {
        const axiosInst = axios.create({ baseURL: process.env.REACT_APP_API_URL })
        const fetchData = async() => {
        setLoading(true);
        try {
            const res = await axiosInst.get(url);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
      }
      fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axiosInst.get(url);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    return { data, loading, error, reFetch };
};

export default useFetch;