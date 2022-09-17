import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hola Mundo!"} style={{color: 'red'}}/> 
    </div>
  );
}

export default App;
