import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola usuario! Bienvenido a la Hamburgueseria"} style={{color: 'red', padding: '20px'}}/> 
    </div>
  );
}

export default App;
