import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.css';
import ShoppingApp from './components/ShoppingApp';
import LoginApp from "./components/LoginApp";
import { useEffect, useState } from "react";


function App() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect( () => {
    fetchLogged()
  }, [])

  const fetchLogged = () => {
    fetch('/check_login_status')
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(
          status => {setIsLogged(status)
          })
  }

  return (
    <div className="App">
      <div className="row d-flex text-center my-5 justify-content-center">
      <Header />
      {
        isLogged ? 
        <>
          <ShoppingApp /> 
        </>
        : 
        <LoginApp />
        
      }
      </div>
    </div>
  );
}

export default App