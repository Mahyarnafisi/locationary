import { useState, createContext, useContext, useEffect } from "react";
const url = "http://localhost:9000";

const CitiesProvider = createContext("");

function CitiesContext({ children }) {
  const [cities, setCities] = useState([]);
  const [countriesList, setCountriesList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState([]);

  //fetch entire data from URL
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
  // modifying cities data to get unique country names
  useEffect(() => {
    const countries = cities.filter((obj, index) => {
      return !cities.slice(0, index).some((item) => item.country === obj.country);
    });
    setCountriesList(countries);
  }, [cities]);

  // async function to get current city
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${url}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("there is a problem in getting current city");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesProvider.Provider
      value={{
        cities,
        countriesList,
        isLoading,
        currentCity,
        setCities,
        setIsLoading,
        setCountriesList,
        setCurrentCity,
        getCity,
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
