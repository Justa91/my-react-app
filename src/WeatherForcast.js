import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForcast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForcast mt-3">
        <div className="row">
          {forcast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let city = props.city;
    let apiKey = "1t46b45ad73356d1fdb57b7o025ca415";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
