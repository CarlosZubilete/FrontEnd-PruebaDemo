import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import productService from '../services/productService';

export default function useDeteleProduct(id){

  const [product,setProduct] = useState({});
  const [error,setError] = useState(false);
  const [isSending,setIsSending] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    productService.findById(id)
    .then((data)=>{
      setProduct(data);
      setError(false);
    })
    .catch(()=>{
      setError(true)
    })
  }, [])

  const handleSubmitForm = (evento) => {
    
    evento.preventDefault();

    setIsSending(true);
    
    setTimeout(() => {
      productService.deleteByID(id)
      .then(()=>{
        navigate('/PageProduct')
      })
    }, 2500)
    
  }

  return{product,error,isSending,handleSubmitForm}
}