import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0 big-box">
                  <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>{" "}
                    {/* Aqui tá a imagem */}
                    <div className="col-lg-7">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Crie sua conta!
                          </h1>
                        </div>
                        <form className="user">
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleFirstName"
                                placeholder="Primeiro Nome"
                              ></input>
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleLastName"
                                placeholder="Sobrenome"
                              ></input>
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              placeholder="Email"
                            ></input>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Senha"
                              ></input>
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleRepeatPassword"
                                placeholder="Repita a Senha"
                              ></input>
                            </div>
                          </div>
                          <button
                            className="btn-block btn-base btn-entrar"
                            type="button"
                          >
                            Registrar-se agora
                          </button>
                          <hr></hr>
                          <button
                            className="btn-block btn-base btn-google"
                            type="button"
                          >
                            Registre-se com Google
                          </button>
                          <button
                            className="btn-block btn-base btn-facebook"
                            type="button"
                          >
                            Registre-se com Facebook
                          </button>
                        </form>
                        <hr></hr>
                        <div className="text-center">
                          {/*<a className="small" href="forgot-password.html">Esqueceu sua senha?</a>*/}
                        </div>
                        <div className="text-center">
                          <div className="small">
                            <Link to="/">Já possui uma conta? Faça Login!</Link>
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
      </div>
    );
  }
}

export default Register;
