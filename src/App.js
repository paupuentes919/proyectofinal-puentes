import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          {/* <ItemListContainer greeting={"Hola usuario! Bienvenido a la Hamburgueseria"} style={{color: 'red', padding: '20px'}}/>  */}
          <Route path={'/'} element={<ItemList/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
