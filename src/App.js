import React from "react";

const LazyHome = React.lazy(()=>import('./pages/home/Home'));
const LazySearch = React.lazy(()=>import('./pages/Search/Search'));
const LazyNewProduct = React.lazy(()=>import('./pages/NewProduct/NewProduct'));
const LazyOffice = React.lazy(()=>import('./pages/Office/Office')); 
const LazyDining = React.lazy(()=>import('./pages/Dining/Dining')); 
const LazyBedroom = React.lazy(()=>import('./pages/Bedroom/Bedroom')); 
const LazyLiving = React.lazy(()=>import('./pages/Living/Living')); 
const LazyOutdoor = React.lazy(()=>import('./pages/Outdoor/Outdoor')); 
const LazyLogin = React.lazy(()=>import('./pages/Login/Login')); 
const LazyRegister = React.lazy(()=>import('./pages/register/Register')); 
const LazyCart = React.lazy(()=>import('./pages/Cart/Cart')); 


import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
  <Routes>
  <Route 
  exact path="/" 
  element={
    <React.Suspense fallback='Loading...'>
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
      <React.Suspense fallback='Loading...'>
        <LazyDining/>
      </React.Suspense>
    }/>

    <Route 
    path ="/bedroom" 
    element={
      <React.Suspense fallback='Loading...'>
        <LazyBedroom/>
      </React.Suspense>
    }/>

    <Route 
    path ="/living" 
    element={
      <React.Suspense fallback='Loading...'>
        <LazyLiving/>
      </React.Suspense>
    }/>



    <Route 
    path ="/outdoor" 
    element={
      <React.Suspense fallback='Loading...'>
        <LazyOutdoor/>
      </React.Suspense>
    }/>

    <Route 
    path ="/search" 
    element={
      <React.Suspense fallback='Loading...'>
          <LazySearch />
      </React.Suspense>
      }/>

    <Route 
    path ="/login" 
    element={
      <React.Suspense fallback='Loading...'>
      <LazyLogin/>
      </React.Suspense>
    }/>

    <Route 
    path ="/register" 
    element={
      <React.Suspense fallback='Loading...'>
         <LazyRegister/>
      </React.Suspense>
   }/>

    <Route 
    path = "cart" 
    element={
      <React.Suspense fallback='Loading...'>
          <LazyCart/>
      </React.Suspense>
    } />

  </Routes>
    
    </div>
  );
}

export default App;
