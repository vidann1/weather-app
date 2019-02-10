import * as React from "react";

import Layout from "../components/Layout";
import Weather from "../components/Weather";
import Form from "../components/Form";

const API_KEY = "";

export default class IndexPage extends React.PureComponent<{}, any> {
  state: any = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind_direction: undefined,
    wind_speed: undefined,
    description: undefined,
    error: undefined
  };
  public getWeather = async (e: any) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind_direction: data.wind.deg,
        wind_speed: data.wind.speed,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        wind_direction: undefined,
        wind_speed: undefined,
        description: undefined,
        error: "Please enter values"
      });
    }
  };
  render() {
    return (
      <Layout title="Home">
        <h1>Hello Next.js 👋</h1>
        <div>
          <div className="col-xs-7 form-container">
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              wind_direction={this.state.wind_direction}
              wind_speed={this.state.wind_speed}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </Layout>
    );
  }
}
