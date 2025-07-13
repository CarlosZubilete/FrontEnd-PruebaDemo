//import CardProduct from "./CardProduct";
import CardProduct from "@products/components/CardProduct"

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
            {/* <div> EDIT - VOLVER </div> */}
          </li>)
      }
    </ul>
  )
}

export default ListProduct;