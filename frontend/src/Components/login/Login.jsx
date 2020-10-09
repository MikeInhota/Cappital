import React, { useState } from "react";
import "./Login.css";
import Main from "../main/Main";
import { Link} from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { email, password };
    if (!(email == null || password == null)) {
      console.log(" Sucesso no if: email ou senha não nulos!");
    } else {
      console.log(" Negativa do if: email e senha são necessários!");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0 big-box">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  {/* Aqui tá a imagem */}
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Bem vindo de volta!
                        </h1>
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            value={email}
                            type="email"
                            className="form-control form-control-user"
                            aria-describedby="emailHelp"
                            placeholder="Entre com Email..."
                            onChange={(e) => setEmail(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group">
                          <input
                            value={password}
                            type="password"
                            className="form-control form-control-user"
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                          ></input>
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            ></input>
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Lembre-se de mim.
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn-block btn-base btn-entrar"
                          type="submit"
                        >
                          Entrar
                        </button>
                        <hr></hr>
                        <button
                          className="btn-block btn-base btn-google"
                          type="button"
                        >
                          Entrar com Google
                        </button>
                        <button
                          className="btn-block btn-base btn-facebook"
                          type="button"
                        >
                          Entrar com Facebook
                        </button>
                      </form>
                      <hr></hr>
                      <div className="text-center">
                        {/* <a className="small txt-simple1" href="forgot-password.html">Esqueceu a senha?</a> */}
                      </div>
                      <div className="text-center">
                        <a className="small txt-simple1" href="register.html">
                          <Link to="/register">Crie sua conta!</Link>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
