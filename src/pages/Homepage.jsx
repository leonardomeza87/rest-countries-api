import { useCallback, useEffect, useState } from "react";
import CardsGenerator from "../components/CardsGenerator";
import Filter from "../components/Filter";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

const Homepage = ({ data }) => {
  const [countries, setCountries] = useState(data);
  const [region, setRegion] = useState("Filter by Region");
  const [updater, setUpdater] = useState(0);
  const [condition, setCondition] = useState(true);

  const updateRegion = useCallback((re) => {
    setRegion(re);
    setUpdater(0);
  }, []);

  const filterByQuery = useCallback(
    (query) => {
      let filteredData = data.filter((country) =>
        country.name.toLowerCase().includes(query)
      );
      setCountries(filteredData);
    },
    [data]
  );

  useEffect(() => {
    if (region === "Filter by Region") {
      return false;
    } else if (region === "All") {
      setCountries(data);
    } else {
      let newData = data.filter((a) => a.region === region);
      setCountries(newData);
    }
  }, [region, data]);

  const increaseChunks = () => {
    setUpdater(Date.now());
  };

  return (
    <div className="home">
      <div className="utilities">
        <SearchBar filterByQuery={filterByQuery} />
        <Filter updateRegion={updateRegion} />
      </div>
      <CardsGenerator
        countries={countries}
        increaseChunk={updater}
        setCondition={setCondition}
      />
      <Loader increaseChunks={increaseChunks} condition={condition} />
    </div>
  );
};

export default Homepage;