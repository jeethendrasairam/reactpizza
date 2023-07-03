
import { BrowserRouter as Router,   Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Products from './components/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Navigation from './components/navigation';




const App = () =>{
    return (
        <>
            <Router>
                  <Navigation />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    {/* <Route path="/About" component={About}></Route> */}
                    <Route path="/products"  element={<Products />}/>
                    <Route path="/products/:_id"  element={<SingleProduct/>}/>
                    <Route path="/cart" element={<Cart/>}/>

                </Routes>
            </Router>
        </>
    )
}
export default App;