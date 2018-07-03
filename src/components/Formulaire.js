import React from 'react';

import Styled from 'styled-components';

import BaliseH1 from './BaliseH1.js';
// import BaliseH2 from './BaliseH2.js';
// import BalisePBold from './BalisePBold.js';
// import BaliseP from './BaliseP.js';
// import RedButtonDiv from './RedButtonDiv.js';


// JSX
const Formulaire = () => 
  <article>
    <div className="row">
      <DivInformation>
          <BaliseH1 children="Inscrit toi et rejoins nous !!!" />
          <DivCentrer>
            <DivFloat>
              <Form>
                <div className="row">
                  <div className="col-2">
                    <label for="inputCivilite">Civilité</label>
                  </div>
                  <div className="col-4">
                    <select id="inputState" className="form-control">
                      <option selected>Docteur</option>
                      <option>Professeur</option>
                      <option>Mademoiselle</option>
                      <option>Madame</option>
                      <option>Monsieur</option>
                    </select>
                  </div>
                  </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputNom">Nom</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" placeholder="Nom" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputPrenom">Prénom</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" placeholder="Prénom" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputEmail">Email</label>
                  </div>
                  <div className="col-4">
                    <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputPassword">Password</label>
                  </div>
                  <div className="col-4">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputAdresse">Adresse</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputAdresse" placeholder="Adresse" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputVille">Ville</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputVille" placeholder="Ville" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputCodePostale">Code Postale</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputCodePostale" placeholder="Code Postale" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputTelephoneFixe">Téléphone Fixe</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputTelephone Fixe" placeholder="TéléphoneFixe" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputTelephoneMobile">Téléphone Mobile</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputTéléphone Mobile" placeholder="TelephoneMobile" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputStructure">Structure</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputStructure" placeholder="Structure" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputService">Service</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputService" placeholder="Service" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">
                    <label for="inputFonction">Fonction</label>
                  </div>
                  <div className="col-4">
                    <input type="text" className="form-control" id="inputFonction" placeholder="Fonction" />
                  </div>
                </div>

                <button type="submit" className="col-4">Valider</button>
              </Form>

            </DivFloat>
          </DivCentrer>
      </DivInformation>
    </div>
  </article>


// Styled-components
// eslint-disable 
const Form = Styled.form`
width: 800px;
  background: blue;
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


export default Formulaire