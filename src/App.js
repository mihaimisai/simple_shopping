import React, {useState} from "react"; 
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.css';
import Form from "./components/Form";
import List from "./components/List"

function App() {

  const [items, setItems] = useState([])

  return (
    <main className="container">
      <div className="row pt-5 d-flex text-center my-5 justify-content-center">
        <Header />
        <Form items={items} setItems={setItems} />
        <List items={items} setItems={setItems} />
      </div>
    </main>
  );
}

export default App
