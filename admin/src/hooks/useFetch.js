import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const useFetch = (url) => {
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const axiosInst = axios.create({ 
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            token: "Bearer " + user.token,
        },
    
    })

    useEffect(() => {
        const axiosInst = axios.create({ 
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
                token: "Bearer " + user.token,
            },
        
        })
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
    }, [url, user]);

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