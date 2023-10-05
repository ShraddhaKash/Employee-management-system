import { useEffect, useState } from "react";
import fetchweather, {
  fetchweatherByLocation,
} from "../../service/weatherService";
import Navbar from "../../component/Navbar";
import InputField from "../../component/InputField";
import styles from "./SearchLocation.module.css";
import WeatherDetails from "./WeatherDetails";

function SeachLocation() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");

  function getLocation() {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }
  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchweatherByLocation(location).then((res) => setWeather(res.data));
    }
  }, [location]);

  function handleOnChange(c) {
    setCity(c);
  }
  function handleSearch() {
    fetchweather(city).then((res) => setWeather(res.data));
  }

  return (
    <div>
      <Navbar />
      <div className={styles.searchMainDiv}>
        <div className={styles.searchDiv}>
          <InputField
            type={"search"}
            placeholder={"Enter Location..."}
            onChange={(c) => handleOnChange(c)}
          />
          <button className={styles.searchBtn} onClick={handleSearch}>
            Search
          </button>
        </div>

        {weather && <WeatherDetails weather={weather} />}
      </div>
    </div>
  );
}

export default SeachLocation;
