import { Link } from "react-router-dom";


const Product = (props) => {
  
  const { Productp} = props;
  return (
        <Link to={`/products/${Productp._id}`} >
        <div>
        <img src={Productp.image} alt="pizza" />
        <div className="text-center">
        <h2 className="text-lg font-bold py-2">{Productp.name}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{Productp.size}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
            <span>₹ {Productp.Price}</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
        </div>
        </div>
        </Link>
  )
}

export default Product;