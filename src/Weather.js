import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    country: "NL",
    temperature: 19,
    time: "Sun 7:00",
    date: "28.12.2020",
    description: "Rain",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
    temperatureMax: 19,
    temperatureMin: 17,
    temperatureFeelsLike: 18,
    humidity: 93,
    wind: 43,
    pressure: 1007,
  };
  return (
    <div className="Weather">
      <div className="weather-app">
        <div className="capital-cities">
          <span className="title">Weather forecast</span>
          <span className="capital-cities-map">
            <button className="city-button">Antwerp</button>
            <button className="city-button">Krakow</button>
            <button className="city-button">Benidorm</button>
            <button className="city-button">Amsterdam</button>
          </span>
          <hr />
        </div>
        <div className="row">
          <div className="col-6">
            <form id="search-form">
              <input
                type="text"
                placeHolder="Search for a city"
                className="form-control"
                autoComplete="off"
              />
            </form>
          </div>
          <div className="col-6">
            <input type="submit" value="🔍" className="btn btn-info" />
            <button className="btn btn-info">📍</button>
          </div>
        </div>
        <div className="spaceing">
          <h1>
            {weatherData.city},{weatherData.country}
          </h1>
          <ul>
            <li>{weatherData.time}</li>
            <li>{weatherData.date}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <strong>{weatherData.temperature}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </div>
            </div>
            <div className="present-temp">
              <ul className="present-temperature">
                <li className="main-max">
                  Max :{" "}
                  <span className="active">{weatherData.temperatureMax}</span>°
                </li>
                <li className="main-min">
                  Min : {weatherData.temperatureMin}°
                </li>
                <li className="feels-like">
                  Feels like : {weatherData.temperatureFeelsLike}°
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Sky: {weatherData.description}</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Pressure: {weatherData.pressure} hPa</li>
            </ul>
          </div>
        </div>
      </div>
      <small className="open-source">
        <a
          href="https://github.com/anna-mars/anna-weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Anna Frąc</span>
      </small>
    </div>
  );
}
