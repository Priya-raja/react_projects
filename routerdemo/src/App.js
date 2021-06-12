import React from 'react'
import Header from './components/header'
import {Route} from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <div>
              <Header/>
          <main>
              <Route path="/welcome"> <Welcome/></Route>
              <Route path="/products"> <Products/></Route>
              <Route path="/productDetail/:productId">
                   <ProductDetail/></Route>


          </main>
            
        </div>
    )
}

export default App
