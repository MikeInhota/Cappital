import React, { Component } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Bem vindo de volta!</h1>
                        </div>
                        <form className="user">
                          <div className="form-group">
                            <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Entre com Email..."></input>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Senha"></input>
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input type="checkbox" className="custom-control-input" id="customCheck"></input>
                              <label className="custom-control-label" for="customCheck">Lembre-se de mim.</label>
                            </div>
                          </div>
                          <a href="index.html" className="btn btn-user btn-block">Entrar</a>
                          <hr></hr>
                          <a href="index.html" className="btn btn-google btn-user btn-block"><i className="fab fa-google fa-fw"></i> Entrar com Google</a>
                          <a href="index.html" className="btn btn-facebook btn-user btn-block"><i className="fab fa-facebook-f fa-fw"></i> Entrar com Facebook</a>
                        </form>
                        <hr></hr>
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">Esqueceu a senha?</a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register.html">Crie sua conta!</a>
                        </div>
                        <div className="text-center">
                          <button type="button" className="btn btn-sm"><Link to="/">Inicio</Link></button>
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

export default Login;