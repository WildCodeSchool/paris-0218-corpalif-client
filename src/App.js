import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import './App.css';

import Logo from './components/Logo.js';
import AccesRapide from './components/AccesRapide.js';
import LittleLogo from './components/LittleLogo.js';
import Recherche from './components/Recherche.js';
import RedButton from './components/RedButton.js';
import BigNavigation from './components/BigNavigation.js';

// import Logo_Corpalif from "./img/Corpalif_Logo.png";
// import Loupe from "./img/Loupe.png";

// import Boite from "./img/Boite.jpg";
// import Etoile from "./img/Etoile.jpg";
// import EtoileMer from "./img/EtoileMer.jpg"


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Logo />
        <AccesRapide /> */}
        <div className="Container">
          <header>
          
            {/* Header 1ère ligne. Zone pour le logo, le petit nav, les petits logo, la recherche et le login */}
            <div className="row RowMargin">
              <div className="App-LogoCorpalif col-2" >
                <Logo />
              </div>
              <div className="App-LittleNav col-5" >
                <AccesRapide />
              </div>
              <div className="App-LittleLogo col-1">
                <LittleLogo />
                <LittleLogo />
              </div>
              <div className="App-Recherche col-2">
                <Recherche />
              </div>
              <div className="App-Login col-2">
                <RedButton />
              </div>

            </div>

            {/* Header 2ère ligne. Zone pour la navigation principale*/}
            <div className="row">
              <div className="App-BigNavigation col-12">
                <BigNavigation />
              </div>
            </div>
          </header>

          {/* Barre de recherche*/}
          <article>

            <section>
              <div className="column Flex">
                <div className="App-RechercheCentrer ImageParis">
                  <div className="row AnnuaireH1 col-12">
                      <h1>Annuaire</h1>
                  </div>

                  <div className="row col-offset-1 col-10 col-offset-1">
                    <form className="BlocGrisRecherche" role="search">
                      <div className="BarreRecherche col-11">
                        <button type="button" className="ButtonRecherche" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action <span className="caret"></span>
                        </button>
                        {/*<ul className="DropDownMenu" aria-labelledby="dropdownMenu1">
                          <li class=""><a href="Action_001">Action_001</a></li>
                          <li class=""><a href="Action_002">Action_002</a></li>
                          <li class=""><a href="Action_003">Action_003</a></li>
                          <li role="separator" class="divider"></li>
                          <li><a href="#">Separated link</a></li>
                        </ul>*/}

                        <input type="text" className="InputRechercheNom" placeholder="Nom ou prestation" />
                        <input type="text" className="InputRechercheVille" placeholder="Ville ou département" />
                        
                      </div>

                      <div className="IconLoupe col-1">
                        <button type="submit" className="ButtonRechercheSubmit"></button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="row">
                <div className="App-CorpalifInformation">
                  <div className="CorpalifInformation">
                    <h1 >La Corpalif</h1>
                    <div className="CorpalifInformationCentrer">
                      <div className="DivFlollante">

                        {/* La DivFlottante sert à forcer les éléments à l'intérieur à être férré à gauche sans 
                        besoin particulier de float, c'est la double div qui permet ce petit tour de magie !*/}
                        <h2>Coordination régionale des soins palliatifs en Île-de-France</h2>
                        <br />
                        <p>4 missions au service des Franciliens</p>
                        <ul>
                          <li>● Assurer le lien entre les structures de prise en charge</li>
                          <li>● Coordonner et participer au développement des soins palliatifs en Île-de-France</li>
                          <li>● Susciter des échanges et des rencontres avec et entre ces professionnels</li>
                          <li>● Promouvoir des actions d'information en soins palliatifs</li>
                        </ul>

                      </div>
                    </div>
                    <button className="RedButton">En savoir plus</button>
                  </div>
                </div>
              </div>
            </section>

            {/* Slider, à modifier avec sagesse !!! */}
            <section>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-block w-100 ImageJustice" alt="First slide">
                      <div className="row">
                        <div className="App-CorpalifInformation ImageJustice">
                          <div className="CorpalifInformation">
                            <h1>Manifeste de la SFAP</h1>
                            <div className="CorpalifInformationCentrer">
                              <div className="DivFlollante">
                                {/* La DivFlottante sert à forcer les éléments à l'intérieur à être férré à gauche sans 
                                besoin particulier de float, c'est la double div qui permet ce petit tour de magie !*/}
                                <br />
                                <p>
                                  Lire le communiqué de presse de la SFAP <br />
                                  « Comment mettre en œuvre une sédation profonde et continue maintenue jusqu'au décès ? ».<br />
                                  Le guide de la Haute Autorité de Santé: disponible !<br /><br />
                                </p>
                                <p>
                                  http://ow.ly/ogzc30iXy6e #SoinsPalliatifs
                                </p>

                              </div>
                            </div>
                            <div className="test">
                              <button className="RedButton">Voir l'actualité</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item text-center">
                    <h1>2 Carousel</h1> ...is centered!
                  </div>
                  <div className="carousel-item text-center">
                    <h1>3 Carousel</h1> ...is centered!
                  </div>

                  {/* <div className="carousel-item active">
                    <img className="d-block w-100" src={Boite} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Etoile} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={EtoileMer} alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Etoile} alt="Fourth slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={EtoileMer} alt="Fifty slide" />
                  </div> */}
                </div>
          
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </section>            

          </article>

        </div>
      </div>
    );
  }
}

export default App;
