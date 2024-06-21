import "./App.styled";
import CartSection from "./Pages/CartSection/CartSection";
import WishlistSection from "./Pages/WishlistSection/WishlistSection";
import Main from "./Pages/Main/Main";
import { Route, Routes, } from 'react-router-dom';
import Women from "./Pages/NavTabs/Women";
import Men from "./Pages/NavTabs/Men";
import Kids from "./Pages/NavTabs/Kids";
import Brands from "./Pages/NavTabs/Brands";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Brands" element={<Brands />} />
        <Route path="/wishlist" element={<WishlistSection />} />
        <Route path="/cart" element={<CartSection />} />
        <Route path="/product" element={ <ProductPage />} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/signUp" element={ <SignUp/>} />

      </Routes>

    </>
  );
}

export default App;
