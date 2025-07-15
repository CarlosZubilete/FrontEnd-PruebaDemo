//import CardProduct from "./CardProduct";
import CardProduct from "@products/components/CardProduct"
import { Link } from 'react-router';
import { Button, Container, Row, Col } from "reactstrap";

function ListProduct({listaProductos}){
//function ListProduct({listaProductos = [] }){
  

  // if (listaProductos.length === 0) {
  //   return <p>No hay productos para mostrar.</p>;
  // }
  
  return(
    <Container className="mt-4">
      <Row>
        {listaProductos.map((product) => 
          <Col key={product.id} sm="12" md="6" lg="4" className="mb-4">
            <CardProduct
              product={{
                name: product.nombre,
                price: product.precio,
                category: product.categoria,
              }}
            />
            <div className="d-flex justify-content-start">
              <Link to={`/PageProduct/${product.id}/edit`} className="me-2">
                <Button color="info">Edit</Button>
              </Link>
              <Link to={`/PageProduct/${product.id}/delete`}>
                <Button color="danger">Delete</Button>
              </Link>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default ListProduct;


/* 
      {listaProductos.map((product) => 
          <li className="listProduct__li" key={product.id}>
            <CardProduct product={{
              name: product.nombre,
              price: product.precio,
              category: product.categoria,
      }} />

      <Link to={`/PageProduct/${product.id}/edit`} >
        <Button className="btn btn-info mt-3 me-3">Edit</Button>
      </Link>
          
      <Link to={`/PageProduct/${product.id}/delete`} >
        <Button className="btn btn-danger mt-3 me-3">Delete</Button>
      </Link>
          <hr />
          </li> )
      }
*/