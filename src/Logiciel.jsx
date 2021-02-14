import './Logiciel.scss';



export default function Logiciel(props) {
    console.log(props);
    return (
<div>


<li className="Logiciel">
    <img className="picture" src={'images-logiciels/' + props.id + '.webp'} alt="image"/>
    <div className="info">
<p className="nom">{props.nom}</p>
<p className="date">modifié: {props.date}</p>

    </div>

    

  </li>



</div>

   );
  }