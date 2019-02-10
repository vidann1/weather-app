import React from "react";

const Weather = (props: any) => (
  <div>
    {props.city && props.country && (
      <p>
        Location:
        <span>
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.city_name && props.country_name && (
      <p>
        Current Location:
        <span>
          {" "}
          {props.city_name}, {props.country_name}
        </span>
      </p>
    )}
    {props.temperature && (
      <p>
        Temperature:
        <span> {props.temperature}°C</span>
      </p>
    )}
    {props.humidity && (
      <p>
        Humidity:
        <span> {props.humidity}</span>
      </p>
    )}
    {props.wind_direction && (
      <p>
        Wind direction:
        <span> {props.wind_direction}° </span>
      </p>
    )}
    {props.wind_speed && (
      <p>
        Wind Speed
        <span> {props.wind_speed}m/s </span>
      </p>
    )}
    {props.description && props.icon && (
      <p>
        Description:
        <span> {props.description}</span>
        <img
          style={{ display: "inline-block" }}
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt="icon"
        />
      </p>
    )}

    {props.error && <p> {props.error} </p>}
  </div>
);

export default Weather;
