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
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputCivilite">Civilité</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Select id="inputState" className="form-control">
                      <option selected>Docteur</option>
                      <option>Professeur</option>
                      <option>Mademoiselle</option>
                      <option>Madame</option>
                      <option>Monsieur</option>
                    </Select>
                  </div>
                  </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputNom">Nom</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputPrenom">Prénom</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputEmail">Email</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="email" className="form-control" id="inputEmail" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputPassword">Password</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="password" className="form-control" id="inputPassword" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputAdresse">Adresse</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputAdresse" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputVille">Ville</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputVille" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputCodePostale">Code Postale</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputCodePostale" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputTelephoneFixe">Téléphone Fixe</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputTelephone Fixe" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputTelephoneMobile">Téléphone Mobile</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputTéléphone Mobile" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputStructure">Structure</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputStructure" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputService">Service</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputService" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <DivLabel className="col-3">
                    <Label for="inputFonction">Fonction</Label>
                  </DivLabel>
                  <div className="col-5">
                    <Input type="text" className="form-control" id="inputFonction" />
                  </div>
                </DivRow>
                <DivRow className="row justify-content-center">
                  <Button type="submit" className="col-2">Valider</Button>
                </DivRow>
              </Form>

            </DivFloat>
          </DivCentrer>
      </DivInformation>
    </div>
  </article>


// Styled-components
// eslint-disable 
const DivRow = Styled.div`
  margin: 20px;
`;

const DivLabel = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 38px;
  padding: 0 10px;
  // border: 2px solid black;
  background-color: rgb(16, 73, 73);
`;

const Label = Styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const Input = Styled.input`
height: 38px;
  padding: 0 10px;
  border: 1px solid lightgrey;
  border-radius: 0;
`;

const Select = Styled.select`
  height: 38px;
  padding: 0 5px;
  border: 1px solid lightgrey;
  border-radius: 0;
`;

const Button = Styled.button`
  height: 38px;
  padding: 0 5px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(16, 73, 73);
`;

const Form = Styled.form`
  width: 800px;
  background: white;
  border: 5px solid rgb(16, 73, 73);
`;

const DivInformation = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px;
  color: white;
  // background-color: rgb(16, 73, 73);
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