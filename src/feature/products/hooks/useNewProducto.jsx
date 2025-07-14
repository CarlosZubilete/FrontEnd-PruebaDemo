

import { useState } from "react";
import productService from "../services/productService";


export default function useNewProduct(){

  const[success,setSuccess] = useState(false);

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
  
  return { handleSubmitForm ,success}

}
