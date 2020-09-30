import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ImgUser from './img/undraw_profile_pic_ic5t.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg fixed-top font-nav bg-tranparent-nav">
            <button className="navbar-brand nav-scroll btn btn-ligth" href="#page-top" id="link-logo"><img className="logo-size" src={""} alt="Logo Cappital"></img></button>
            <button className="navbar-toggler custom-toggler btn btn-ligth" type="button" data-toggle="collapse" data-target="#navbarSite">
              <span className="navbar-toggler-icon mx-auto"></span></button>

            <div className="collapse navbar-collapse" id="navbarSite">

              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <button className="nav-link nav-scroll btn btn-ligth" href="#sobre">Sobre</button>
                </li>
                <li className="nav-item dropdown">

                  <button className="nav-link dropdown-toggle nav-scroll btn btn-ligth" href="#drop" data-toggle="dropdown" id="navDrop">Serviços</button>

                  <div className="dropdown-menu">
                    <button className="dropdown-item btn btn-ligth" href="#endividados">Para endividados</button>
                    <button className="dropdown-item btn btn-ligth" href="#financeiro">Para controle financeiro</button>
                  </div>
                </li>
                <li className="nav-item">
                  <button className="nav-link nav-scroll btn btn-ligth" href="#contato">Contato</button>
                </li>
              </ul>
              <Link to="/login" className="btn btn-ligth">Entrar</Link>
            </div>
          </nav>
        </header>

        <div className="linha">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum vero ipsa, mollitia, eveniet saepe illo quo asperiores eligendi tempore odio accusamus ut consequuntur sit eum, vitae praesentium eos reiciendis id?</p>
        </div>

        <section id="landing-home">
          <div className="container-fluid">
            <div className="row">
              <div id="first-column" className="col-xl-6 col-md-6 col-sm-12">
                <div className="briefing">
                  <h1 className="titulo">Cappital melhora suas finanças</h1>
                  <p id="descricao" className="text-color-dark">Melhore sua relação com o dinheiro</p></div>
                <div id="botoes-home" className="d-flex justify-content-between">
                  <a href="#sobre" className="btn btn-lg btn-ligth" role="button" aria-disabled="true">Saiba mais</a>
                  <button className="btn"><Link to="/register">Cadastrar</Link></button>
                </div>
              </div>
              <div id="second-column" className="col-xl-6 col-md-6 col-sm-12"><img alt="imagem placeholder" id="working-late" src="#"></img></div>
            </div>
          </div>
        </section>

        <section id="sobre">
          <div className="container-fluid mx-auto">
            <div className="row">
              <div id="first-column" className="col-xl-6 col-md-6 col-sm-12">
                <img alt="Cappital" id="barber" src=""></img></div>
              <div id="second-column" className="col-xl-6 col-md-6 col-sm-12">
                <div className="briefing">
                  <h1 className="titulo">Sobre a Cappital</h1>
                  <p id="explanation" className="text-color-dark">Texto explicativo Cappital</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="endividados">
          <div className="container-fluid mx-auto">
            <div className="row">
              <div className="col-12 col-xl-4 col-md-8 text-center">
                <h1 className="titulo-services">Para endividados</h1>
              </div>
            </div>
            <div className="row">

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card">
                  <img alt="Cappital" className="card-img-top mt-5" src="image/undraw_people_search_wctu.svg" alt="Networking"></img>
                  <div className="card-body">
                    <p id="titulo" className="card-title text-center text-color-dark">Money</p>
                    <p id="subtitulo" className="card-subtitle text-center text-color-dark">Encontre o caminho para liberdade financeira</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card">
                  <img alt="Cappital" className="card-img-top mt-5" src="image/undraw_portfolio_feedback_exfk.svg" alt="Portfólio"></img>
                  <div className="card-body">
                    <p id="titulo" className="card-title text-center text-color-dark">Money</p>
                    <p id="subtitulo" className="card-subtitle text-center text-color-dark">Algo sobre dinheiro</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card">
                  <img alt="Cappital" className="card-img-top mt-5" src="image/undraw_crypto_portfolio_2jy5.svg" alt="Gerenciamento"></img>
                  <div className="card-body">
                    <p id="titulo" className="card-title text-center text-color-dark">Gerenciamento</p>
                    <p id="subtitulo" className="card-subtitle text-center text-color-dark">Gerencie seu dinheiro facilmente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="financeiro">
          <div className="container-fluid mx-auto">
            <div className="row">
              <div className="col-12 col-xl-4 col-md-8 text-center">
                <h1 className="titulo-services">Para Controle financeiro</h1>
              </div>
            </div>
            <div className="row">

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card">
                  <img alt="Cappital" className="card-img-top mt-5" src="image/undraw_11like_dislike_1dfj.svg" alt="Networking"></img>
                  <div className="card-body">
                    <p id="titulo" className="card-title text-center text-color-dark">MOney</p>
                    <p id="subtitulo" className="card-subtitle text-center text-color-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus laboriosam eaque possimus aliquid beatae consequatur veniam nobis nam quas nemo quo, sapiente quasi dolores perspiciatis id maiores qui necessitatibus non!</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card">
                  <img alt="Cappital" className="card-img-top mt-5" src="image/undraw_services_5tv9.svg" alt="Solicitações"></img>
                  <div className="card-body">
                    <p id="titulo" className="card-title text-center text-color-dark">MOney</p>
                    <p id="subtitulo" className="card-subtitle text-center text-color-dark">Lorem ipsum de novo</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="card">
                  <img alt="Cappital" className="card-img-top mt-5" src="image/undraw_33a_Booked_j7rj.png" alt="Agendamento"></img>
                  <div className="card-body">
                    <p id="titulo" className="card-title text-center text-color-dark">Mney</p>
                    <p id="subtitulo" className="card-subtitle text-center text-color-dark">Mais Lorem Ipsum</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="contato">
          <div className="container-fluid">
            <div className="row">
        <div id="first-column" className="col-xl-6 col-md-6 col-sm-12">
                <img alt="Cappital" id="envelope" src="image/undraw_envelope_n8lc.svg"></img>
              </div>
        <div id="second-column" className="col-xl-6 col-md-6 col-sm-12">
                <div className="formulario">
                  <h1 className="titulo">Converse com a gente</h1>
                  <form>
                    <div className="form-group"><label for="nome">Nome</label><input type="text" className="form-control" id="nome" name="nome" placeholder="Digite seu nome aqui"></input></div>
                    <div className="form-group"><label for="email">E-mail</label><input type="email" className="form-control" id="email" name="email" placeholder="exemplo@mail.com"></input></div>
                    <div className="form-group"><label for="mensagem">Mensagem</label><textarea className="form-control" id="mensagem" name="mensagem" placeholder="O que você quer falar pra gente?" rows="3"></textarea></div>
                    <div className="form-group"><button className="btn btn-lg btn-ligth" type="submit">Enviar mensagem</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <p className="App-intro"><Link to="/about">Ir para a página sobre </Link> Landing Page.</p>
      </div>
    );
  }
}

export default App;
