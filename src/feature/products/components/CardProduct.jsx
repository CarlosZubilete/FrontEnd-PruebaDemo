

function CardProduct({product}){

  const handleSelected = () => {
    //navigate(`/digimonsPage/${digimons.name}`)
  }

  return (
    <div onClick={handleSelected} 
      className='cardProduct'>
      {/* <p className='instrumentCard__p'>ID: {instrument.id}</p> */}
      <p className='cardProduct__p'><span className='cardProduct__p--span'>Name: </span>{product.name}</p>
      <p className='cardProduct__p'><span className='cardProduct__p--span'>Price: </span>${product.price}</p>
      <p className='cardProduct__p'><span className='cardProduct__p--span'>Category: </span>{product.category}</p>
    </div>
  )
}

export default CardProduct;