import './ListeLogiciels.scss';
import './Appli.scss';
import Logiciel from "./Logiciel";
import tabLogiciels from './data/logiciel.json';

export default function ListeLogiciels(props){




    return (

  <div className="ListeLogiciels">      
        <h2>Produits logiciels</h2>    
<ul>



 

{tabLogiciels.map(prd => 
    <Logiciel key={prd.id} nom={prd.nom} date={prd.date} id={prd.id}/>    
   )}

</ul>

</div>
   );
  }