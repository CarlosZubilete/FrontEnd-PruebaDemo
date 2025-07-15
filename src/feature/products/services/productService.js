
import axios from "axios"

const productService = {
  find: async () => {
    return axios.get('http://localhost:5155/api/Productos/lista')
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
          // console.error(error)
          // throw error
      })     
  },
  create: async (values) => {
    return axios.post('http://localhost:5155/api/Productos/nuevo',JSON.stringify(values), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
  },
  findById: async(id) => {
    return axios.get(`http://localhost:5155/api/Productos/producto/${id}`)
      .then((response) =>{
        return response.data;
      })
      .catch(() => {

      })
  },
  editByID: async (id,values) => {
    return axios.patch(`http://localhost:5155/api/Productos/editar/${id.toString()}`,JSON.stringify(values),{
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
}

export default productService