import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CustomNavbar from "./components/Navbar";
import Informazioni from "./components/Informazioni";
import Skills from "./components/Skills";
import Progetti from "./components/Progetti";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Informazioni />
      <Skills />
      <Progetti />
    </div>
  );
}

export default App;
