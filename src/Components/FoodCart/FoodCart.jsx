

const FoodCart = ({item}) => {
    const { name, price, image, recipe } = item;
  return (
  <>
  <div>
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute right-0 mr-4 mt-4 rounded-md px-3 py-1 text-white bg-red-700">$ {price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary text-center">Add to cart</button>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default FoodCart