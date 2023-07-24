import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingApp from './components/ShoppingApp';

function App() {

  return (
    <div className="App">
      <div className="row pt-5 d-flex text-center my-5 justify-content-center">
      <Header />
      <ShoppingApp />
      </div>
    </div>
  );
}

export default App