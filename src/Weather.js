import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "9 September",
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
    });

    console.log(response.data);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-7">
                <input
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
          <div className="weather-info mt-4">
            <div className="row">
              <div className="col-6">
                <h2>{weatherData.city}</h2>
                <p>{weatherData.date}</p>
                <ul>
                  <li>
                    <span className="additional-info">Humidity:</span>{" "}
                    {weatherData.humidity}%
                  </li>
                  <li>
                    <span className="additional-info">Wind: </span>
                    {weatherData.wind}km/h
                  </li>
                </ul>
              </div>
              <div className="col-6 align-self-center">
                <div className="d-flex align-self-stretch justify-content-center ">
                  <img src={weatherData.icon} alt={weatherData.description} />
                  <span className="temperature-info">
                    {weatherData.temperature}℃
                  </span>
                </div>

                <span className="description-info">
                  {weatherData.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1t46b45ad73356d1fdb57b7o025ca415";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
