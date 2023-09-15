import React from "react";
import "./WeatherForcast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcast(props) {
  return (
    <div className="WeatherForcast mt-3">
      <div className="row">
        <div className="col">
          <div className="forcast-day">Sat</div>
          <WeatherIcon code={"scattered-clouds-day"} size={40} />
          <div className="forcast-temperatures">
            <span className="forcast-temp-max">19℃</span>
            <span className="forcast-temp-min"> 19℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}
