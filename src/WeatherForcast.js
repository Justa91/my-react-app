import React, { useState } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setForcast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forcast);
    return (
      <div className="WeatherForcast mt-3">
        <div className="row">
          <div className="col">
            <WeatherForcastDay data={forcast[0]} />
          </div>
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
