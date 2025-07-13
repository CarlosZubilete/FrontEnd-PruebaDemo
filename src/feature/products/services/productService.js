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
}

export default productService