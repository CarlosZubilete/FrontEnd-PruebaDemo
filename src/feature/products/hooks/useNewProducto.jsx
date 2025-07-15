

import {  useEffect, useState } from "react";
import productService from "../services/productService";


async function saveProduct(id,values){
  // dependiendo si hay un id agregamos el instrumento...
  if(id){
    return productService.editByID(id,values)
  }
  else{
    return productService.create(values)
  }
}

export default function useNewProduct(id){

  const[success,setSuccess] = useState(false);
  const[product,setProduct] = useState(null) // Declarate a box will fill out with product
  const[error,setError] = useState(false)

  const handleSubmitForm = (values, {setSubmitting}) => {
    
    console.log(values);

    const payload = {
      nombre: values.name,
      precio: values.price,
      categoria: values.category,
      eliminado: false,
      ventasitems: []
    };

    setSubmitting(true);
    saveProduct(id,payload)
      .then(()=>{
        setTimeout(() => {
          setSuccess(true);
          setSubmitting(false);
        }, 2500)
      })
      .catch(()=>{
        setError(true)
        setSubmitting(false);
      })


    // try {
    //   await productService.create(payload);
    //   console.log('Producto guardado correctamente');
    //   setSuccess(true);
    // } catch (error) {
    //   console.error('Error al guardar producto:', error);
    //   setSuccess(false); //
    // }
  }


  useEffect(()=>{   
      if(id){
      productService.findById(id)  
        .then((data) => {
          setProduct(data);
        })
        .catch(() => {
          // RETORNA un error
        })
    }
  },[id])
  
  return { handleSubmitForm , success , product, error }

}
