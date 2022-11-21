import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import WishListPage from "./components/WishListPage";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/my-account" element={<MyAccount />}/>
          <Route path="/product" element={<Product />}/>

          <Route path="/cart" element={<Cart />}>
            <Route index element={<CartPage/>}/>
            <Route path='wishlist' element={<WishListPage/>}/>
          </Route>

          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
