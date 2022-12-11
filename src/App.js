import NavBar from "./Components/NavBar";
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";
import Services from "./Components/Services";

function App() {
  return (
   <>
<Router>
   <NavBar/>
  <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/contact" element={ <Contacts/> } />
    <Route path="/services" element={ <Services/> } />
  </Routes>
  <Footer/>
</Router>
   </>
  );
}

export default App;
