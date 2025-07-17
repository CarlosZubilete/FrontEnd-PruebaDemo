//import CardProduct from "./CardProduct";
import CardProduct from "@products/components/CardProduct"
import { Link } from 'react-router';
import { Button, Container, Row, Col } from "reactstrap";

const BadRequest = () => (
  <div className="container text-center mt-5 pt-4" role="alert">
    <h2 className="text-danger fs-4">
      <strong>¡Error!</strong> Could not connect to the server..
    </h2>
  </div>
);

function ListProduct({listaProductos = [] }){
  
  
  return(
    <Container className="mt-4">
      {(listaProductos.length === 0) && <BadRequest />}
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

