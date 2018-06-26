import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';
import RedButton from '../components/RedButton.js';
import Onglet from '../components/Onglet.js';

storiesOf('Button', module)
  .add('with some emoji', () => 
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="emojie" >😀 😎 👍 💯</span>
    </Button>)
    .add('with red button', () => 
    <Button onClick={action('clicked')} style={{color: 'red'}}>
      Teste mon BOUTON ROUGE !
    </Button>);

storiesOf('RedButton', module)
  .add('with text', () => 
    <RedButton onClick={action('clicked')}>
      Hello Button
    </RedButton>)
    .add('with text, black fond', () => 
    <RedButton onClick={action('clicked')} style={{background: 'black'}} >
      Bienvenue
    </RedButton>);

storiesOf('Onglet', module)
.add('with text', () => 
  <Onglet onClick={action('clicked')}>
    Hello Button
  </Onglet>);