import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = (props) => {
  const [fstName, setFstname] = useState();
  const [lstName, setLstname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const person = {fstName, lstName, email, password, passwordConf};
  }

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
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                value={fstName}
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Primeiro Nome"
                                onChange={(e) => setFstname(e.target.value)}
                              ></input>
                            </div>
                            <div className="col-sm-6">
                              <input
                              value={lstName}
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Sobrenome"
                                onChange={(e) => setLstname(e.target.value)}
                              ></input>
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              value={email}
                              type="email"
                              className="form-control form-control-user"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                            ></input>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                value={password}
                                type="password"
                                className="form-control form-control-user"
                                placeholder="Senha"
                                onChange={(e) => setPassword(e.target.value)}
                              ></input>
                            </div>
                            <div className="col-sm-6">
                              <input
                              value={passwordConf}
                                type="password"
                                className="form-control form-control-user"
                                placeholder="Repita a Senha"
                                onChange={(e) => setPasswordConf(e.target.value)}
                              ></input>
                            </div>
                          </div>
                          <button
                            className="btn-block btn-base btn-entrar"
                            type="submit"
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

export default Register;
