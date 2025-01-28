import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

function App() {

  const Home = lazy(() => import("./pages/Home"));
  const Cart = lazy(() => import("./pages/Cart"));

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {/* <FlashMessage /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
