
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
  FindById: async(id) => {
    return axios.get(`http://localhost:5155/api/Productos/producto/${id}`)
      .then((response) =>{
        return response.data;
      })
      .catch(() => {

      })
  }
}

export default productService