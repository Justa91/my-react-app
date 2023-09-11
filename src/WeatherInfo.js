import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info mt-4">
      <div className="row">
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <FormattedDate date={props.data.date} />
          <ul>
            <li>
              <span className="additional-info">Humidity:</span>{" "}
              {props.data.humidity}%
            </li>
            <li>
              <span className="additional-info">Wind: </span>
              {props.data.wind}km/h
            </li>
          </ul>
        </div>
        <div className="col-6 align-self-center">
          <div className="d-flex align-self-stretch justify-content-center ">
            <WeatherIcon code={props.data.icon} />
            <span className="temperature-info">{props.data.temperature}℃</span>
          </div>

          <span className="description-info">{props.data.description}</span>
        </div>
      </div>
    </div>
  );
}
