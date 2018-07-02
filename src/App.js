import React, { Component } from 'react';
// import { Media } from 'reactstrap';
import './App.css';

import BaliseH1 from './components/BaliseH1';
import BaliseH2 from './components/BaliseH2';
import BaliseP from './components/BaliseP';
import BalisePBold from './components/BalisePBold';
import Header from './components/Header'; 
import AnnuaireEnEntier from './components/AnnuaireEnEntier';
// import RedButton from './components/RedButton.js';
import RedButtonDiv from './components/RedButtonDiv.js';
import AnnuaireAvecBlocGris from './components/AnnuaireAvecBlocGris';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <Header />   

          {/* Corps de page */}
          <article>         
            <AnnuaireEnEntier />

            <section>
              <div className="row">
                <div className="App-CorpalifInformation">
                  <div className="CorpalifInformation">
                    <BaliseH1 children="La Corpalif" />
                    <div className="CorpalifInformationCentrer">
                      <div className="DivFlollante">

                        {/* La DivFlottante sert à forcer les éléments à l'intérieur à être férré à gauche sans 
                        besoin particulier de float, c'est la double div qui permet ce petit tour de magie !*/}
                        <BaliseH2 children="Coordination régionale des soins palliatifs en Île-de-France"></BaliseH2>
                        <br />
                        <BalisePBold children="4 missions au service des Franciliens"></BalisePBold>
                        <ul>
                          <li><BaliseP children="● Assurer le lien entre les structures de prise en charge"></BaliseP></li>
                          <li><BaliseP children="● Coordonner et participer au développement des soins palliatifs en Île-de-France"></BaliseP></li>
                          <li><BaliseP children="● Susciter des échanges et des rencontres avec et entre ces professionnels"></BaliseP></li>
                          <li><BaliseP children="● Promouvoir des actions d'information en soins palliatifs"></BaliseP></li>
                          <li><BaliseP children="● Promouvoir des actions d'information en soins palliatifs Promouvoir des actions d'information en soins palliatifs Promouvoir des actions d'information en soins palliatifs Promouvoir des actions d'information en soins palliatifs Promouvoir des actions d'information en soins palliatifs"></BaliseP></li>

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
                            <BaliseH1 children="Manifeste de la SFAP" />
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
