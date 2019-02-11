import * as React from "react";

import Layout from "../components/Layout";
import Weather from "../components/Weather";
import Form from "../components/Form";

const geo_api = process.env.geo_api;
const API_KEY = process.env.API_KEY;

export default class IndexPage extends React.PureComponent<{}, any> {
  state: any = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    wind_direction: undefined,
    wind_speed: undefined,
    description: undefined,
    icon: undefined,
    country_name: undefined,
    error: undefined
  };

  /*
  public async componentDidMount() {
    fetch(`http://api.ipstack.com/check?access_key=${geo_api}`)
      .then(res => res.json())
      .then(res => console.log(res));
  }
  */

  public async componentDidMount() {
    const geo_api_call = await fetch(
      `http://api.ipstack.com/check?access_key=${geo_api}`
    );
    const geo_data = await geo_api_call.json();
    console.log(geo_data);
    this.setState({
      city_name: geo_data.city,
      country_name: geo_data.country_name
    });
    const city = "London";
    const country = "UK";

    const forecast_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const foreacast_data = await forecast_call.json();
    console.log(foreacast_data);
  }
  /*
  public getForecast = async (e: any) => {
    const city = "London";
    const country = "UK";
    e.preventDefault();
    const forecast_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric`
    );
    const foreacast_data = await forecast_call.json();
    console.log(foreacast_data);
  };
*/
  public getWeather = async (e: any) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wind_direction: data.wind.deg,
        wind_speed: data.wind.speed,
        icon: data.weather[0].icon,
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
        icon: undefined,
        error: "Please enter values"
      });
    }
  };
  render() {
    // const icon = this.state.icon;
    return (
      <Layout title="Home">
        <h1>Hello Next.js 👋</h1>

        <Weather
          city_name={this.state.city_name}
          country_name={this.state.country_name}
        />
        <div>
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            icon={this.state.icon}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            wind_direction={this.state.wind_direction}
            wind_speed={this.state.wind_speed}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </Layout>
    );
  }
}
