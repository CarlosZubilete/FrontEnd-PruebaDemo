import { useEffect } from 'react';
import { useNavigate , Link , useParams } from 'react-router-dom';
import { Formik, Form , Field , ErrorMessage} from 'formik';
import { SchemaProduct } from '../schemas/schemaProduct';
import { Container , Row , Col , Button , Label , Input , FormGroup} from 'reactstrap';
import useNewProduct from '../hooks/useNewProducto';

const ErrorOne = ({children}) => {
  return <span style={{fontSize:'.6rem', color:'red' , fontWeight:'bold'}}> {children} </span>
}

function NewProduct(){
  
  const params = useParams();

  const { handleSubmitForm, success , product} = useNewProduct(params.id);

  // If everything is ok..
  const redirect = useNavigate();

  useEffect(()=>{
    if(success){
      redirect('/PageProduct');
    }
  },[success])


  if(params?.id && product == null) return <p>Cargando...</p>

  return(
    <Container className='mt-5'>
      <Row>
        <Col sm={{size:8, offset:2}}>
          <hr />
          <h3 className='font-weight-bold'>{(product?.id) ? 'Edit' : 'Add'} Producto </h3>
          <hr />
          <Formik 
            initialValues={{
              name: product?.nombre || '', 
              price: product?.precio || 0 , 
              category: product?.categoria || '',
            }}
            onSubmit={handleSubmitForm} // QUERY FROM USE-HOOK
            validationSchema={SchemaProduct} // VALIDATION 
          >
            <Form>
              <FormGroup>
                <Label for="name">Name</Label>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  as={Input}
                  className="mb-1"
                />
                <ErrorMessage name="name" component={ErrorOne} />
              </FormGroup>
        
              <FormGroup>
                <Label for="price">Price</Label>
                <Field
                  name="price"
                  id="price"
                  as={Input}
                  type="number"
                  className="mb-1"
                />
                <ErrorMessage name="price" component={ErrorOne} />
              </FormGroup>

              <FormGroup>
                <Label for="category">Category</Label>
                <Field
                  name="category"
                  id="category"
                  as={Input}
                  type="text"
                  className="mb-1"
                />
                <ErrorMessage name="category" component={ErrorOne} />
              </FormGroup>


          <Button type="submit" color="success" className="mt-3 me-3">
            Send
          </Button>

          <Button color="secondary" className="mt-3">
            <Link to="/PageProduct" className="text-light text-decoration-none">
              Back
            </Link>
          </Button>
            </Form>
          </Formik>
          
          {/* <Button color="secondary" className="mt-3">
            <Link to="/PageProduct" className="text-light text-decoration-none">
              Back
            </Link>
          </Button> */}
        </Col>
      </Row>      
    </Container>
  ) 
}

export default NewProduct;