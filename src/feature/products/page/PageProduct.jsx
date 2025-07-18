import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProductList from "@products/hooks/useProductList"
import ListProduct from "@products/components/ListProduct"
// import useProductList from '../hooks/useProductList';
// import ListProduct from '../components/ListProduct';
import FilterText from "../components/FilerText";

const Loading = () => (
  <div className="container text-center mt-5 pt-4">
    <div className="spinner-border text-primary" role="status"></div>
    <p className="mt-3">Loading...</p>
  </div>
);

function PageProduct(){

  const[listAll, setListAll] = useState([]);

  const { products , loading  } = useProductList();

  useEffect(()=>{
    setListAll(products);
 
  },[products])

  if(loading) return <Loading />

  const handlerFilter = (filterTxt) => {
  setListAll(products.filter((product) => {
    return product.nombre.toUpperCase().includes(filterTxt.toUpperCase());
  }))

  }
  return(
      <div className="container mt-5 pt-4">
        <h2 className="">Products List</h2>
        <Link to="/new-product" className="text-light text-decoration-none">    
          <button type="button" className="btn btn-success mb-3">
            Add Product
          </button>
        </Link>
        <hr />
        <FilterText onFilter={handlerFilter} /> 
        <hr />
        <ListProduct listaProductos={listAll} />
        <hr />
      </div>
  )
}

export default PageProduct;