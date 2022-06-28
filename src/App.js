import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import SignIn from './pages/SignIn/SignIn';
import SignUp  from './pages/SignUp/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={ <Products />} />
          <Route path="/signin" element={ <SignIn />} />
          <Route path="/signup" element={ <SignUp />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
