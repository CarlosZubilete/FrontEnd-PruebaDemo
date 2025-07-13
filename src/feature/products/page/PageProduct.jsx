import { useEffect, useState } from "react";

import useProductList from "@products/hooks/useProductList"
import ListProduct from "@products/components/ListProduct"

// import useProductList from '../hooks/useProductList';
// import ListProduct from '../components/ListProduct';

function PageProduct(){

  const[listAll, setListAll] = useState([]);
  const { products , loading , err } = useProductList();

  useEffect(()=>{
    setListAll(products)
  },[products])

  if(err) return <h1>Error</h1>
  if(loading) return <h1>Cargando...</h1>

  return(
    <div>
      <h2>Products List</h2>
      <hr />
      <ListProduct listaProductos={listAll} />
    </div>
  )
}

export default PageProduct;