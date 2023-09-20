import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForcastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }
  return (
    <div>
      <div className="forcast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={40} />
      <div className="forcast-temperatures">
        <span className="forcast-temp-max">{maxTemperature()}°</span>
        <span className="forcast-temp-min">{minTemperature()}°</span>
      </div>
    </div>
  );
}
