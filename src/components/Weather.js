import React from "react";

const Weather = props => (
  <div>
    {props.city  &&
      <div className="card bg-success mb-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Местоположение: {props.city}, {props.country}</li>
          <li class="list-group-item">Температура: {props.temp}</li>
          <li class="list-group-item">Восход солнца: {props.sunrise}</li>
          <li class="list-group-item">Давление: {props.pressure}</li>
        </ul>
      </div>
    }
    <div className="card-body text-white mb-3">
      <h5 className="card-title ">{props.error}</h5>
    </div>
  </div>
)


export default Weather;