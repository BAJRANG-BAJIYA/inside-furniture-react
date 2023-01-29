import React from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Living from "./pages/Living/Living";
import Outdoor from "./pages/Outdoor/Outdoor";
import Cart from "./pages/Cart/Cart";
import { Routes, Route} from "react-router-dom";
const LazyHome = React.lazy(()=>import('./pages/home/Home'));
const LazySearch = React.lazy(()=>import('./pages/Search/Search'));
const LazyNewProduct = React.lazy(()=>import('./pages/NewProduct/NewProduct'));
const LazyOffice = React.lazy(()=>import('./pages/Office/Office')); 
const LazyDining = React.lazy(()=>import('./pages/Dining/Dining')); 
const LazyBedroom = React.lazy(()=>import('./pages/Bedroom/Bedroom')); 

function App() {
  return (
    <div className="App">
  <Routes>
  <Route 
  exact path="/" 
  element={
    <React.Suspense fallback='Loading'>
        <LazyHome/>
    </React.Suspense>
  } />
  
    <Route 
    path ="/newproduct" 
    element={
      <React.Suspense fallback='Loading...'>
        <LazyNewProduct/>
      </React.Suspense>
    }/>
    <Route 
    path ="/office" 
    element={
      <React.Suspense fallback='Loading...'>
        <LazyOffice/>
      </React.Suspense>
    }/>

    <Route 
    path ="/dining" 
    element={
      <React.Suspense fallback='Loading'>
        <LazyDining/>
      </React.Suspense>
    }/>

    <Route 
    path ="/bedroom" 
    element={
      <React.Suspense fallback='Loading'>
        <LazyBedroom/>
      </React.Suspense>
    }/>
    
    <Route path ="/living" element={<Living/>}/>
    <Route path ="/outdoor" element={<Outdoor/>}/>
    <Route 
    path ="/search" 
    element={<React.Suspense fallback='Loading...'>
              <LazySearch />
            </React.Suspense>
              }/>
    <Route path ="/login" element={<Login/>}/>
    <Route path ="/register" element={<Register/>}/>
    <Route path = "cart" element={<Cart/>} />

  </Routes>
    

    </div>
  );
}

export default App;
