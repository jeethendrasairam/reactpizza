
import { useEffect,useState } from 'react';
import {Link, useNavigate,useParams}from 'react-router-dom'
import PizzaData from '../components/PizzaData.json'
const SingleProduct = () => {
    const navigate=useNavigate();

    const params = useParams();

    console.log(params._id);
    const [currentPizza,setCurrentPizza] = useState({});

    useEffect(()=>{
      const pizzas=PizzaData?.pizzaData;
      console.log(pizzas,"pizzas")
     setCurrentPizza(pizzas?.find((pizza)=> pizza._id==params._id));
    },[])
    function goBack(){
        navigate(
            -1
        )
    }

    
    
    return (
      <div className="container mx-auto mt-12">
        {/* <Link to="/"> */}
          <button className="mb-12 font-bold" onClick={goBack}> Back</button>
          <div className="flex">
              <img src="/images/peproni.png" alt="pizza" />
              <div className="ml-16">
                  <h1 className="text-xl font-bold">{currentPizza?.name}</h1>
                  <div className="text-md">{currentPizza?.size}</div>
                  <div className="font-bold mt-2">₹{currentPizza?.Price}</div>
                  <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
              </div>
          </div>
          {/* </Link> */}
      </div>
    )
  }
  
  export default SingleProduct

