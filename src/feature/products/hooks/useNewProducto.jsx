
import { useEffect, useState } from "react";
import productService from "../services/productService";

async function saveProduct(id,values){
  // dependiendo si hay un id agregamos el instrumento...
  // if(id){
  //   return productService.editByID(id,values)
  // }
  // else{
  //   return productService.create(values)
  // }
  return productService.create(values)
}

export default function useNewProduct(){


  const handleSubmitForm = (values) => {
    
    console.log(values);
 
    // setSubmitting(true);
    // // 3. Enviamos la peticion POST
    // saveProduct(values)
    // .then(()=>{
    //     setTimeout(() => {
    //       setSuccess(true)
        
    //     }, 2500)
    //   })
    //   .catch(()=>{
    //     setError(true)
    //     setSubmitting(false);
    //   })
  }
  
  return { handleSubmitForm }

}

  // Miramos el id, cada vez que enviamos un id , preguntamos si exite
  
    // useEffect(()=>{
    //   if(id){
    //     saveProduct.findByID(id)  
    //       .then((data) => {
    //         productService(data)
    //       })
    //       .catch(() => {
    //         // RETORNA un error
    //       })
    //   }
    // }, [id])