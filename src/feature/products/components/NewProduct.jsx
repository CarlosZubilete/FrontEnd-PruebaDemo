import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form , Field , ErrorMessage} from 'formik';
// import { useParams } from 'react-router-dom';
import { SchemaProduct } from '../schemas/schemaProduct';
import useNewProduct from '../hooks/useNewProducto';

const ErrorOne = ({children}) => {
  return <span style={{fontSize:'.6rem', color:'red' , fontWeight:'bold'}}> {children} </span>
}

function NewProduct(){
  
  // const params = useParams();

  const { handleSubmitForm, success } = useNewProduct();

  // If everything is ok..
  const redirect = useNavigate();

  useEffect(()=>{
    if(success){
      redirect('/PageProduct');
    }
  },[success])

  return(
    <div>
      <h2>New Product</h2>

      <Formik 
        initialValues={{name:'', price: 0 , category:''}}
        onSubmit={handleSubmitForm} // QUERY FROM USE-HOOK
        validationSchema={SchemaProduct} // VALIDATION 
      >
        <Form>
          <div>
            <label htmlFor="name">Name: 
              <Field type="text" name="name" id="name" />
              <ErrorMessage name='name' component={ ErrorOne }/>
            </label>
            <br />
            <label htmlFor="price">Price: 
              <Field type="number" name="price" id="price" />
              <ErrorMessage name='price' component={ ErrorOne }/>
            </label>
            <br />
               <label htmlFor="category">Category: 
              <Field type="text" name="category" id="category" />
              <ErrorMessage name='category' component={ ErrorOne }/>
            </label>     
          <br />
          </div>
          {/* ENVIAR */}
          <button type="submit"
            className='AddInstrument__button'> Send
          </button>
        </Form>
      </Formik>
    </div>
  ) 
}

export default NewProduct;