import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import './App.css';

import Logo from './components/Logo.js';
import LittleLogo from './components/LittleLogo.js';
import Recherche from './components/Recherche.js';
import RedButton from './components/RedButton.js';
import RedButtonDiv from './components/RedButtonDiv.js';
import BigNavigation from './components/BigNavigation.js';
import AnnuaireAvecBlocGris from './components/AnnuaireAvecBlocGris';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <header>
          
            {/* Header 1ère ligne. Zone pour le logo, le petit nav, les petits logo, la recherche et le login */}
            <div className="row RowMargin">
              <div className="App-LogoCorpalif col-2" >
                <Logo />
              </div>
              <div className="App-LittleNav col-5" >
                {/* <AccesRapide /> */}
              </div>
              <div className="App-LittleLogo Flex col-1">
                <div className="row DivLogo">
                  <LittleLogo />
                  <LittleLogo />
                </div>
              </div>
              <div className="App-Recherche col-2">
                <Recherche />
              </div>
              <div className="App-Login col-2">
                <RedButton children="Espace adhérent" />
              </div>

            </div>

            {/* Header 2ère ligne. Zone pour la navigation principale*/}
            <div className="row">
              <div className="App-BigNavigation col-12">
                <BigNavigation />
              </div>
            </div>
          </header>

          
          {/* Annuaire Bloc */}

          <article>         
            <section>
              <div className="column Flex">
                <AnnuaireAvecBlocGris children="ImageParis" />
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
                        </ul>

                      </div>
                    </div>
                    <RedButtonDiv children="En savoir plus"/>
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
                        <div className="App-CorpalifInformation FondGris">
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
                            <RedButtonDiv> Voir l'actualité </RedButtonDiv>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-block w-100 ImageHopital" alt="First slide">
                      <div className="row">
                        <div className="App-CorpalifInformation FondGris">
                          <div className="CorpalifInformation">
                            <h1>L'hôpital public dans les déficits ?</h1>
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
                            <RedButtonDiv> Voir l'actualité </RedButtonDiv>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="d-block w-100 ImageAnciens" alt="First slide">
                      <div className="row">
                        <div className="App-CorpalifInformation FondGris">
                          <div className="CorpalifInformation">
                            <h1>L'information du patient</h1>
                            <div className="CorpalifInformationCentrer">
                              <div className="DivFlollante">
                                {/* La DivFlottante sert à forcer les éléments à l'intérieur à être férré à gauche sans 
                                besoin particulier de float, c'est la double div qui permet ce petit tour de magie !*/}
                                <br />
                                <p>
                                  La question de l'information est souvent récurrente dans le cursus du cancéreux :<br />
                                  lors du diagnostic, lors de l'échec thérapeutique, lors de la phase terminale.<br />
                                  Le guide de la Haute Autorité de Santé: disponible !<br /><br />
                                </p>
                                <p>
                                  http://ow.ly/ogzc30iXy6e #SoinsPalliatifs
                                </p>

                              </div>
                            </div>
                            <RedButtonDiv> Voir l'actualité </RedButtonDiv>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <RedButtonDiv children="En savoir plus"/>
                  </div>
                </div>
              </div>
            </section>      

            {/* <footer>
              <div className="row">
                <div className="App-Footer">
                  <p>La Corpalif</p>
                  <p>coordonne les soins palliatifs en Île-de-France,</p>
                  <p>participe à leur développement</p>
                  <p>et contribue à la visibilité de leurs acteurs.</p>
                  <br />
                  <p>106 avenue EmileZola</p>
                  <p>75015 Paris</p>
                  <p>Tél. 00 00 00 00 00</p>
                </div>
                <div>
                  <p>FAQ</p>
                  <p>Newsletter</p>
                  <p>Mentions légales</p>
                  <p>Crédits</p>
                </div>
                <div>
                  <p>Nos partenaires</p>
                  <p>Logo01</p>
                  <p>Logo02</p>
                </div>
              </div>
              <div className="column">
              <p>@ Corpalif - 2018</p>
              </div>
            </footer> */}
          </article>

        </div>
      </div>
    );
  }
}

export default App;
