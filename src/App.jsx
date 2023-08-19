import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./Pages/HomePage/HomePage";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Pricing from "./Pages/Pricing/Pricing";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import AppLayout from "./Pages/AppLayout/AppLayout";
import CityList from "./Components/CityList/CityList";
import CountriesList from "./Components/CountriesList/CountriesList";
import Form from "./Components/Form/Form";
import City from "./Components/City/City";
import { CitiesContext } from "./Contexts/CitiesContext";
// const url = "http://localhost:9000";

function App() {
  // const [cities, setCities] = useState([]);
  // const [countriesList, setCountriesList] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(function () {
  //   async function fetchCities() {
  //     try {
  //       setIsLoading(true);
  //       const res = await fetch(`${url}/cities`);
  //       const data = await res.json();
  //       setCities(data);
  //     } catch {
  //       alert("there is a problem to fetch the data");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   fetchCities();
  // }, []);

  // useEffect(() => {
  //   const countries = cities.filter((obj, index) => {
  //     return !cities.slice(0, index).some((item) => item.country === obj.country);
  //   });
  //   setCountriesList(countries);
  // }, [cities]);

  //
  return (
    <CitiesContext>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesContext>
  );
}

export default App;
