import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
