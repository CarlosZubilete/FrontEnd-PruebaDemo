//import CardProduct from "./CardProduct";
import CardProduct from "@products/components/CardProduct"
import { Link } from 'react-router';

function ListProduct({listaProductos}){
//function ListProduct({listaProductos = [] }){
  

  // if (listaProductos.length === 0) {
  //   return <p>No hay productos para mostrar.</p>;
  // }
  
  return(
    <ul className="listProduct">
      {listaProductos.map((product) => 
          <li className="listProduct__li" key={product.id}>
            <CardProduct product={{
              name: product.nombre,
              price: product.precio,
              category: product.categoria,
            }} />
            <hr /> 
          <Link to={`/PageProduct/${product.id}/edit`}>
            <button>Edit</button>
          </Link>
          </li>)
      }
    </ul>
  )
}

export default ListProduct;