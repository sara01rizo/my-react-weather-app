import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city here .."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Berlin</h1>
        <ul>
          <li className="weekDay">Saturday</li>
          <li className="current_Time"></li>
          <li className="current_Status">Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src="" alt="Cloudy" className="float-left" />
              <div className="float-left">
                <span className="temperature">{Math.round(temperature)}</span>
                <span className="unit">ºC</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13 km/h</li>
              <li>See more details..</li>
              <li>See more days</li>
              <li>Live Video</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d8deaa5d17730f137e29380a7c1c3909";
    let city = "Berlín";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
