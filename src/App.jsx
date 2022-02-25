import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer title="Plantas Interior"/>
    </div>
  );
}

export default App;
