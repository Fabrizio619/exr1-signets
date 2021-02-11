import './ListeLogiciels.scss';
import { useState } from 'react';
import Entete from './Entete';
import ListeLogiciel from './ListeLogiciels';
// import ListeLogiciel from './ListeLogiciel';

export default function Appli() {
  return (
    <div className="Appli">

<Entete />

        Gabarit de base d'une Application React dude

        <section className="contenuePrincipale">

      <ListeLogiciel />
       

      </section>

    </div>
  );
}
