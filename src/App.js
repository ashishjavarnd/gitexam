import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./screen/Signin";
import Signup from "./screen/Signup";
import ProductList from "./screen/ProductList";
import Addproduct from "./screen/Addproduct";
import NotFound from "./screen/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Navbar />
        <NavTabs/>
        <Routes>
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/product-list" element={<ProductList />} />
          <Route exact path="/add-product" element={<Addproduct />} />
          <Route
            exact
            path="/edit-product/:productId"
            element={<Addproduct />}
          />
          <Route path="/error404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
