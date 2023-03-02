import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import "./App.css";
import Cabezera from "./components/Cabezera";


function App() {
  return (  
    <div className="App container text-center">
      <Cabezera/>
    </div>
  );
}
export default App;
