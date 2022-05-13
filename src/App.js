import AddProduct from "./pages/AddProduct";
import Product from "./pages/Product";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path="/">
            <Route index element={<Product />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </Dashboard>
    </BrowserRouter>
  );
}

export default App;
