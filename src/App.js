import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import './index.css'


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />¡
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
