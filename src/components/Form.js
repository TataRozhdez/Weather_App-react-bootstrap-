import React from "react";

const Form = props => (
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" placeholder="Город" className="form-control form-control-lg" />
    <button className="btn btn-outline-danger btn-lg btn-block">Получить</button>
  </form>
)

export default Form;