import React from 'react';

import './Recherche.css';

const Recherche = () =>
<div className="row">
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Rechercher sur le site" />
    <span className="input-group-btn">
      <button className="btn btn-default" type="button"><span role="img" aria-label="loupe">🔍</span></button>
    </span>
  </div>
</div>


export default Recherche