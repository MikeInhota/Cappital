import React, { Component } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div className="App">

        <div class="container">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 big-box">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Crie sua conta!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0"><input type="text" class="form-control form-control-user" id="exampleFirstName" placeholder="Primeiro Nome"></input></div>
                        <div class="col-sm-6"><input type="text" class="form-control form-control-user" id="exampleLastName" placeholder="Sobrenome"></input></div>
                      </div>
                      <div class="form-group">
                        <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email"></input>
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Senha"></input>
                        </div>
                        <div class="col-sm-6">
                          <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repita a Senha"></input>
                        </div>
                      </div>
                      <a href="login.html" class="btn btn-primary btn-user btn-block">Registrar Conta</a>
                      <hr></hr>
                      <a href="index.html" class="btn btn-google btn-user btn-block">
                        <i class="fab fa-google fa-fw"></i> Registre se com o Google</a>
                      <a href="index.html" class="btn btn-facebook btn-user btn-block">
                        <i class="fab fa-facebook-f fa-fw"></i> Registre se com o Facebook</a></form>
                    <hr></hr>
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">Esqueceu sua senha?</a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="login.html">Já possui uma conta? Faça Login!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="App-intro">
          <Link to="/">Ir para a página Inicial </Link>
          Register!
        </p>

      </div>
    );
  }
}

export default Register;