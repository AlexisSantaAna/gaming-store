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
import Cart from './components/Cart';
import { initializeApp } from "firebase/app";

function App() {
  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA0yuk8b0g3OR4fcPuSk6Ywr4y9YH6YQJs",
    authDomain: "gaming-store-d48ba.firebaseapp.com",
    projectId: "gaming-store-d48ba",
    storageBucket: "gaming-store-d48ba.appspot.com",
    messagingSenderId: "203551597560",
    appId: "1:203551597560:web:bd8668c54308cb84bc2c0d"
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (

    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/testeventos" element={<TestEventos />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
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
