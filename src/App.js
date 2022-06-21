import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import './index.css'
import TestEventos from './components/TestEventos';
import MyProvider from './context/CartContext';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/testeventos" element={<TestEventos />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/cart" />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </MyProvider>
      </BrowserRouter>
    </div>

  );
}

export default App;
