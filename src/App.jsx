import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Pricing from "./Pages/Pricing/Pricing";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import AppLayout from "./Pages/AppLayout/AppLayout";
import CityList from "./Components/CityList/CityList";
const url = "http://localhost:9000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("there is a problem to fetch the data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  console.log(cities);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<CityList isLoading={isLoading} cities={cities} />} />
          <Route path="cities" element={<CityList isLoading={isLoading} cities={cities} />} />
          <Route path="countries" element={<p>Countries</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
