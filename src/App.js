import {BrowserRouter,Routes,Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/Homepage'
import AboutPage from './pages/About'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import AuthPage from './pages/AuthPage'
import Helpbot from './components/Helpbot'
 
const App = () =>{
  return(
    <>
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/"and element={<HomePage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
         <Route path="*" element={<NotFound/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/authpage" element={<AuthPage/>}/>
         
       </Routes>
       <Footer/>
       <Helpbot/>
     </BrowserRouter>
    </>  
    );
}
export default App;