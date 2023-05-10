import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import UserCartDetails from "./user/UserCartDetailsPage";
import UserOrdersDetailsPage from "./user/UserOrderDetailsPage";
import UserOrdersPage from "./user/UserOrdersPage";
import UserProfilePage from "./user/UserProfilePage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />;
        {/* <Route path="*" element="404 Page does not exist" /> */}
        <Route element={<ProtectedRoutesComponent />}>
          <Route path="/user" element={<UserProfilePage />} />;
          <Route path="/user/my-orders" element={<UserOrdersPage />} />;
          <Route
            path="/user/my-orders/:id"
            element={<UserOrdersDetailsPage />}
          />
          ;
          <Route path="/user/cart-details" element={<UserCartDetails />} />;
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
