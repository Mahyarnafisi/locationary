import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import PageNav from "./Components/PageNav/PageNav";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Pricing from "./Pages/Pricing/Pricing";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <PageNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
