import React from "react";
import Botao from "../Botao";
import Link from "../Link/Link";
import "./forms.css";

class Formulario extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="form-container">
        {formHeader()}
        <div className="login-form">
          <form>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@gmail.com"
                required
              ></input>
            </div>
            {passwordField()}
            <div className="buttons-container">
              <Botao />
              <Link href="https://abraz.org.br/" text="Forgot your password?" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function passwordField() {
  return (
    <div className="input-container">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Insert password"
        id="password"
        required
      ></input>
    </div>
  );
}

const formHeader = () => (
  <div className="form-header">
    <h1>User Login</h1>
    <span>Welcome</span>
  </div>
);

export default Formulario;
