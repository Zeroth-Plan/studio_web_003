import logo from './logo.svg';
import './App.css';
import Frame from './frame/Frame';
import Product from './product/Product';

import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/product">
            <Product/>
            </Route>
          <Route path="/frame">
            <Frame/>
            </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
