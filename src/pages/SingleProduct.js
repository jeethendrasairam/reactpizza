
import {Link, useNavigate}from 'react-router-dom'
const SingleProduct = () => {
    const navigate=useNavigate();
    function goBack(){
        navigate(
            "/"
        )
    }

    
    
    return (
      <div className="container mx-auto mt-12">
        <Link to="/">
          <button className="mb-12 font-bold" > Back</button>
          <div className="flex">
              <img src="/images/peproni.png" alt="pizza" />
              <div className="ml-16">
                  <h1 className="text-xl font-bold">Apple pizza</h1>
                  <div className="text-md">small</div>
                  <div className="font-bold mt-2">₹ 500</div>
                  <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
              </div>
          </div>
          </Link>
      </div>
    )
  }
  
  export default SingleProduct

