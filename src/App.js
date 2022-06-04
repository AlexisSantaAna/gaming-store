import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {  
  const onAdd = (contador) => {
    alert(`Agregado ${contador} producto(s)`)
  }

  return (
    <div className="App">    

      <NavBar />

      <ItemListContainer /> 

      <div className='contador text-center'>        
        <ItemCount inicial={1} stock={10} onAdd={onAdd} />
      </div>

    </div>
  );
}

export default App;
