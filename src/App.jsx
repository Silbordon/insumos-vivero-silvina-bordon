import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Gift from './components/Gift/Gift';
import CustomProvider from './context/CustomProvider';
import Cart from './components/Cart/Cart';




function App() {
  return (
    <CustomProvider>
      <div className="position">

        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:catName" element={<ItemListContainer />} />
            <Route path="/item/:itemIdParams" element={<ItemDetailContainer />} />
            <Route path="/regala" element={<Gift />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error to='/' />} />
          </Routes>

          <Footer
          />

        </BrowserRouter>
      </div>
    </CustomProvider>
  );
}

export default App;
