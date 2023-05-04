import "./App.css";
import MyAddressPage from "./components/Address/MyAddressPage";
import ZeroCartPage from "./components/Empty/ZeroCartPage";
import NavBar from "./components/Header/NavBar";
import HomePage, { loader, productsLoader } from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import WishListProduct from "./components/Product/WishListProduct";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/navigation/Layout";
import ZeroWishlist from "./components/Empty/ZeroWishlist";
import NotFound from "./components/Empty/NotFound";
import ProductsError from "./components/Home/ProductsError";
import ProductPageDisplay from "./components/ProductPageDisplay.js/ProductPageDisplay";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ProductsError />} element={<NavBar />}>
      <Route index element={<HomePage />} loader={productsLoader} />
      <Route path="ZeroCartPage" element={<ZeroCartPage />} />
      <Route path="ZeroWishlist" element={<ZeroWishlist />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<ProductPageDisplay />} />
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router} />
    // <div className="App">
    //   <BrowserRouter>
    //   <header><NavBar/></header>
    //   <main>
    //   <Routes>
    //     <Route index element={<HomePage />} />
    //     <Route path="ZeroCartPage" element={<ZeroCartPage />} />
    //     <Route path="ZeroWishlist" element={<ZeroWishlist />} />
    //     <Route path="login" element={<LoginPage />} />
    //   </Routes>
    //   </main>
    // </BrowserRouter>
    // </div>
  );
}

export default App;
