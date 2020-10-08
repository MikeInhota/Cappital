import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 big-box">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div> {/* Aqui tá a imagem */}
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Crie sua conta!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="Primeiro Nome"
                          ></input>
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleLastName"
                            placeholder="Sobrenome"
                          ></input>
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Email"
                        ></input>
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Senha"
                          ></input>
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Repita a Senha"
                          ></input>
                        </div>
                      </div>
                      <button className="btn-block btn-base btn-entrar" type="button">Registrar-se agora</button>
                      <hr></hr>
                      <button className="btn-block btn-base btn-google" type="button">Registre-se com Google</button>
                      <button className="btn-block btn-base btn-facebook" type="button">Registre-se com Facebook</button>                      
                    </form>
                    <hr></hr>
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        Esqueceu sua senha?
                      </a>
                    </div>
                    <div class="text-center">
                      <div className="small"><Link to="/">Já possui uma conta? Faça Login!</Link></div>
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
