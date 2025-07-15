import {useState, useEffect} from 'react';
//import productService from '@products/services/productService';
import productService from '../services/productService';

 function useProductList(){

  const[products,setProducts] = useState([]);
  const[loading,setLoading] = useState(true);
  const[err,setErr] = useState(false);

  useEffect(()=>{
    productService.find()
    .then((data)=>{
      setProducts(data)
      //setProducts(Array.isArray(data) ? data : []); 
    })
    .catch(()=>{
      setErr(true);
    })
    .finally(()=>{
      setLoading(false);
      })
 
      
  },[]);

  return { products,  loading , err };
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