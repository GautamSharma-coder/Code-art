import {BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/Homepage'
import AboutPage from './pages/About'
import NotFound from './pages/NotFound'

const App = () =>{
  return(
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/"and element={<HomePage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
         <Route path="*" element={<NotFound/>}/>
       </Routes>
       <Footer/>
     </BrowserRouter>
    </>  
    );
}
export default App;