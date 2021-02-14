import './ListeLogiciels.scss';
import './Appli.scss';
import Logiciel from "./Logiciel";
import tabLogiciels from './data/logiciel.json';

import AddIcon from '@material-ui/icons/Add';
// import { AddIcon } from '@material-ui/core';

export default function ListeLogiciels(props){




    return (

  <div className="ListeLogiciels">      
        <h2>Produits logiciels new</h2>    
<ul>



 

{tabLogiciels.map(prd => 
    <Logiciel key={prd.id} nom={prd.nom} date={prd.date}  couleur={prd.couleur} id={prd.id}/>    
   )}

</ul>

<div className="AddIconbody">
<AddIcon/>
</div>

</div>
   );
  }