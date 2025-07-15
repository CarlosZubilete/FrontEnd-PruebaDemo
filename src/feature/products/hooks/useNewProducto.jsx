

import {  useEffect, useState } from "react";
import productService from "../services/productService";



export default function useNewProduct(id){

  const[success,setSuccess] = useState(false);
  const[product,setProduct] = useState(null) // Declarate a box will fill out with product

  const handleSubmitForm = async (values) => {
    
    console.log(values);


    const payload = {
      nombre: values.name,
      precio: values.price,
      categoria: values.category,
      eliminado: false,
      ventasitems: []
    };

    try {
      await productService.create(payload);
      console.log('Producto guardado correctamente');
      setSuccess(true);
    } catch (error) {
      console.error('Error al guardar producto:', error);
      setSuccess(false); //
    }
  }


  useEffect(()=>{   
      if(id){
      productService.FindById(id)  
        .then((data) => {
          setProduct(data);
        })
        .catch(() => {
          // RETORNA un error
        })
    }
  },[id])
  
  return { handleSubmitForm , success , product }

}
