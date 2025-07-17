import {useState, useEffect} from 'react';
//import productService from '@products/services/productService';
import productService from '../services/productService';

 function useProductList(){

  const[products,setProducts] = useState([]);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(false);

  useEffect(()=>{
    productService.findAll()
    .then((data)=>{
      //setProducts(data);
      setProducts(Array.isArray(data) ? data : []); 
      //if(Array.isArray(data))
      
    })
    .catch(()=>{
      setError(true);
    })
    .finally(()=>{
      setLoading(false);
      })
 
      
  },[]);

  return { products,  loading , error };
}

export default useProductList;


// TODO! When I added a new or edit product , can't not up-to-date.
/*
const cache = {
  productos:null,
};

--
  useEffect(()=>{
    if(cache.productos) {
      setProducts(cache.productos);
      setLoading(false);
      return;
    }
    productService.find()
      .then((data) => {
        cache.productos = data; // guardar en cache
        setProducts(data);
      })
      .catch(() => {
        setErr(true);
      })
      .finally(() => {
        setLoading(false);
      });
      
  },[]);
  */