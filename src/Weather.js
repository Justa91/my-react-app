import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <h2>Warsaw</h2>
              <p>Friday 13:51</p>
              <ul>
                <li>
                  <span>Humidity:</span> 50%
                </li>
                <li>
                  <span>Wind:</span> 1km/h
                </li>
              </ul>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span>ICON</span>
              <span>13℃</span>
              <span>few clouds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
