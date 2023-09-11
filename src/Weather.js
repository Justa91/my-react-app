import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "1t46b45ad73356d1fdb57b7o025ca415";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  onChange={handleCityChange}
                  type="search"
                  placeholder="Type a city..."
                  className="p-2 search-input"
                ></input>
              </div>

              <div className="col-5 ps-0">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary submit-button"
                />
              </div>
            </div>
          </form>
          <hr></hr>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
