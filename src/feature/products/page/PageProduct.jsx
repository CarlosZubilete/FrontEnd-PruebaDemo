import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="container mt-5 pt-4">
        <hr />
        <h2>Products List</h2>
          <Link to="/new-product" className="text-light text-decoration-none">    
            <button type="button" className="btn btn-success mb-3">
              Add Product
            </button>
          </Link>
        <hr />
        <ListProduct listaProductos={listAll} />
        <hr />
      </div>
  )
}

export default PageProduct;