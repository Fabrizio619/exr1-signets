import './Logiciel.scss';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import NotesIcon from '@material-ui/icons/Notes';

export default function Logiciel(props) {
    console.log(props);
    return (
<div>


<li className="Logiciel"> 
<div className="NotesIcon">  
<NotesIcon/>
</div> 
    <img className="picture" src={'images-logiciels/' + props.id + '.webp'} alt="image" width="225px" height="40px"/>
    <div className="info">
<p className="nom">{props.nom}</p>
<p className="date">modifié: {props.date} <div className="MoreVertIcon">  <MoreVertIcon/>  </div>  </p>
{/* <MoreVertIcon/> */}
    </div>

    

  </li>



</div>

   );
  }