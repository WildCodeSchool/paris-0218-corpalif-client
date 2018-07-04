import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1.js';
// import BaliseH2 from './BaliseH2.js';
// import BalisePBold24 from './BalisePBold24.js';
// import BaliseP from './BaliseP.js';
import RedButtonDiv from './RedButtonDiv.js';

import Justice from './../img/Justice_Fond_001.jpg';


// JSX
const Carrousel = () => 
  <article>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
            <DivJustice src={Justice} className="d-block w-100" alt="First slide"> {/* ici */}
            <div className="row">
              <DivInformation className="FondGris">
                <div className="CorpalifInformation">
                  <BaliseH1 children="Manifeste de la SFAP" />
                  <DivCentrer>
                    <DivFloat>

                      <br />
                      <p>
                        Lire le communiqué de presse de la SFAP <br />
                        « Comment mettre en œuvre une sédation profonde et continue maintenue jusqu'au décès ? ».<br />
                        Le guide de la Haute Autorité de Santé: disponible !<br /><br />
                      </p>
                      <p>
                        http://ow.ly/ogzc30iXy6e #SoinsPalliatifs
                      </p>

                    </DivFloat>
                  </DivCentrer>
                  <RedButtonDiv> Voir l'actualité </RedButtonDiv>
                </div>
              </DivInformation>
            </div>
          </DivJustice>
        </div>

        <div className="carousel-item">
          <div className="d-block w-100 ImageHopital" alt="First slide">
            <div className="row">
              <DivInformation className="FondGris">
                <div className="CorpalifInformation">
                  <BaliseH1 children="L'hôpital public dans les déficits ?" />
                  <DivCentrer>
                    <DivFloat>

                      <br />
                      <p>
                      Lire le communiqué de presse de la SFAP <br />
                        « Comment mettre en œuvre une sédation profonde et continue maintenue jusqu'au décès ? ».<br />
                        Le guide de la Haute Autorité de Santé: disponible !<br /><br />
                      </p>
                      <p>
                        http://ow.ly/ogzc30iXy6e #SoinsPalliatifs
                      </p>

                    </DivFloat>
                  </DivCentrer>
                  <RedButtonDiv> Voir l'actualité </RedButtonDiv>
                </div>
              </DivInformation>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="d-block w-100 ImageAnciens" alt="First slide">
            <div className="row">
              <DivInformation className="FondGris">
                <div className="CorpalifInformation">
                  <BaliseH1 children="L'information du patient" />
                  <DivCentrer>
                    <DivFloat>

                      <br />
                      <p>
                        La question de l'information est souvent récurrente dans le cursus du cancéreux :<br />
                        lors du diagnostic, lors de l'échec thérapeutique, lors de la phase terminale.<br />
                        Le guide de la Haute Autorité de Santé: disponible !<br /><br />
                      </p>
                      <p>
                        http://ow.ly/ogzc30iXy6e #SoinsPalliatifs
                      </p>

                    </DivFloat>
                  </DivCentrer>
                  <RedButtonDiv> Voir l'actualité </RedButtonDiv>
                </div>
              </DivInformation>
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
  </article>


// Styled-components
// eslint-disable 
const DivJustice = Styled.div` 
  height: 250px;
  width: 100%;
  background: no-repeat center fixed;
  background-size: cover;
  -webkit-background-size: cover; 
`;

const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 50px;

  color: white;
  background-color: rgb(16, 73, 73);
`;

const DivCentrer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin: 15px;
`;

const DivFloat = Styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1000px;
`;
// eslint-enable


export default Carrousel