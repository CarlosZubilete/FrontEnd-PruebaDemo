import { useEffect, useState } from "react";

import useProductList from "@products/hooks/useProductList"
import ListProduct from "@products/components/ListProduct"
import { Link } from "react-router-dom";

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
      <button type="button"> 
        <Link to='/new-product' className='navBar__ul__li__a'> Add Product</Link>
      </button>
      <hr />
      <ListProduct listaProductos={listAll} />
      <hr />
     
    </div>
  )
}

export default PageProduct;