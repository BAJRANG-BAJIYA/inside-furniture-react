
import Home from "./pages/home/Home";
import Office from "./pages/Office/Office";
import Dining from "./pages/Dining/Dining";
import Bedroom from "./pages/Bedroom/Bedroom";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import NewProduct from "./pages/NewProduct/NewProduct";
import Search from "./pages/Search/Search";
import Living from "./pages/Living/Living";
import Outdoor from "./pages/Outdoor/Outdoor";



import {
   Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
  <Routes>
  <Route exact path="/" element={<Home/>} />
  
    <Route path ="/newproduct" element={<NewProduct/>}/>
    <Route path ="/office" element={<Office/>}/>
    <Route path ="/dining" element={<Dining/>}/>
    <Route path ="/bedroom" element={<Bedroom/>}/>
    <Route path ="/living" element={<Living/>}/>
    <Route path ="/outdoor" element={<Outdoor/>}/>
    <Route path ="/search" element={<Search/>}/>
    <Route path ="/login" element={<Login/>}/>
    <Route path ="/register" element={<Register/>}/>


  </Routes>
    

    </div>
  );
}

export default App;
