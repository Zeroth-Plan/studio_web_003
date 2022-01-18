import logo from './logo.svg';
import './App.css';
import Frame from './frame/Frame';
import Product from './product/Product';
import Photoedit from './photoediting/PhotoEdit';
import Photoservice from './photoservice/PhotoService';
import Mug from './mug/Mug';
import Flex from './flex/Flex';
import Laser from './laser/Laser';
import Services from './services/Services';
import Photoprint from './photoprinting/PhotoPrint';
import Home from './home/Home';
import Login from './login/Login';
import Signup from './signup/SignUp';
import Cart from './cart/Cart';
import Upload from './upload/Upload';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'
import About from './about/About';
import Metal from './metal/Metal';
import Contact from './contact/Contact';
import Edit from './edit/Edit';
import Flexup from './flexup/FlexUp';
import Frameup from './frameup/FrameUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/mug" element={<Mug/>}/>
          <Route exact path="/frame" element={<Frame/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/product" element={<Product/>}/>
          <Route exact path="/photoservice" element={<Photoservice/>}/>
          <Route exact path="/flex" element={<Flex/>}/>
          <Route exact path="/photoprint" element={<Photoprint/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/laser" element={<Laser/>}/>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/upload" element={<Upload/>}/>
          <Route exact path="/photoedit" element={<Photoedit/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/metal" element={<Metal/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/edit" element={<Edit/>}/>
          <Route exact path="/flexup" element={<Flexup/>}/>
          <Route exact path="/frameup" element={<Frameup/>}/>
          
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
