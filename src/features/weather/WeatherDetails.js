import styles from "./WeatherDetails.module.css";

function WeatherDetails({ weather }) {
  return (
    <div>
      <h2 className={styles.heading}>
        {weather.name} | {weather.weather[0].description} |{" "}
        {(weather.main.feels_like - 273.15).toFixed(2)}°C
      </h2>
      <div className={styles.details}>
        <p>
          Tempreture from {(weather.main.temp_min - 273.15).toFixed(2)}°C to
          {(weather.main.temp_max - 273.15).toFixed(2)}°C
        </p>
        <p>Clouds {weather.clouds.all}%</p>
        <p>Wind {weather.wind.speed}m/s</p>
        <p>Pressure {weather.main.pressure}hpa</p>
        <h3>
          Geo Cords : [{weather.coord.lat} , {weather.coord.lon}]
        </h3>
      </div>
    </div>
  );
}

export default WeatherDetails;
