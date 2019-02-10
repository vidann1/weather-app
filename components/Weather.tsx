import React from "react";

const Weather = (props: any) => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        Temperature:
        <span className="weather__value"> {props.temperature}°C</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        Humidity:
        <span className="weather__value"> {props.humidity}</span>
      </p>
    )}
    {props.wind_direction && (
      <p className="weather__key">
        Wind direction:
        <span className="weather__value"> {props.wind_direction}° </span>
      </p>
    )}
    {props.wind_speed && (
      <p className="weather__key">
        Wind Speed
        <span className="weather__value"> {props.wind_speed}m/s </span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        Description:
        <span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__key"> {props.error} </p>}
  </div>
);

export default Weather;
