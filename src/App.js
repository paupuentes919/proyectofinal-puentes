import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {/* <ItemListContainer greeting={"Hola usuario! Bienvenido a la Hamburgueseria"} style={{color: 'red', padding: '20px'}}/>  */}
          <Route path={'/'} element={<ItemListContainer greeting={"Hola usuario! Bienvenido a la Hamburgueseria"} />}></Route>
          <Route path={'/category/:id'} element={<ItemListContainer/>}></Route>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
