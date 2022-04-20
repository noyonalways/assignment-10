import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Services from './components/Services/Services';
import Checkout from './pages/Checkout/Checkout';
import RequireAuth from './components/ReuireAuth/RequireAuth';

function App() {

  useEffect(() => {
    Aos.init();
  }, []); 

  return (
    <div className="App">
      <Header/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
