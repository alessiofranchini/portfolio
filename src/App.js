import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from "./components/Navbar";
import Informazioni from "./components/Informazioni";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Informazioni />
      <Skills />
    </div>
  );
}

export default App;
