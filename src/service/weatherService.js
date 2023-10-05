import axios from "axios";

const APIkey = "88a19ccbf95d2e36ed7a8177ed6af92a";

export default async function fetchweather(cityName) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}

export async function fetchweatherByLocation(location) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&appid=${APIkey}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching weather automatically:", error);
    throw error;
  }
}
