import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='background'>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            {/* <ItemListContainer greeting={"Hola usuario! Bienvenido a la Hamburgueseria"} style={{color: 'red', padding: '20px'}}/>  */}
            <Route path={'/'} element={<ItemListContainer greeting={"Hola usuario! Bienvenido a la Hamburgueseria"} />}></Route>
            <Route path={'/category/:category'} element={<ItemListContainer/>}></Route>
            <Route path={'/item/:id'} element={<ItemDetailContainer/>}></Route>
            <Route path={'/cart'} element={<Cart/>}></Route>
            <Route path={'/checkout'} element={<Checkout/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
