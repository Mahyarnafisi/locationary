import { useState, createContext, useContext, useEffect } from "react";
const url = "http://localhost:9000";

const CitiesProvider = createContext("");

function CitiesContext({ children }) {
  const [cities, setCities] = useState([]);
  const [countriesList, setCountriesList] = useState();
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

  useEffect(() => {
    const countries = cities.filter((obj, index) => {
      return !cities.slice(0, index).some((item) => item.country === obj.country);
    });
    setCountriesList(countries);
  }, [cities]);
  return (
    <CitiesProvider.Provider
      value={{
        cities,
        countriesList,
        isLoading,
        setCities,
        setIsLoading,
        setCountriesList,
      }}
    >
      {children}
    </CitiesProvider.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesProvider);
  if (context === undefined) {
    alert("you need to use useCities properly in your component");
  }
  return context;
}

export { CitiesContext, useCities };
