import React from "react";
import "./App.css";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "df652487bb8d7a87cd0eb1285ee869ac";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
   
    const city = e.target.elements.city.value;
    
    if (city) {
      const api_url = await 
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      const sunrise = data.sys.sunrise;
      const date = new Date();
      date.setTime(sunrise);
      const sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: sunrise_date,
      pressure: data.main.pressure,
      error: undefined
     });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        pressure: undefined,
        error: "Введите название города"
      });
    }
  }

  render() {
    return (
      <div className="main">
        <div className="form-goup">
          <div className="col-form-label">
            <Info />
          </div>
          <div>
            <Form weatherMethod={this.gettingWeather}/>
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.county}
              sunrise={this.state.sunrise}
              pressure={this.state.pressure}
              error={this.state.error}
                />
              </div>
            </div>
        </div>
    )
  }
}

export default App;
