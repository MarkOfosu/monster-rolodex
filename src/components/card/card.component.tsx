
import { Monster } from '../../App';
import './card.style.css'


type CardProps = {
    monster: Monster;
}
const Card = ({monster}: CardProps) => {

    const {id, name,email} = monster;

    return (
        <div className="card-container" key={id}>
            <img alt={`monsters ${name}`}
            src={`https://robohash.org/${id}?set=set2`} 
            />
            <h1 >{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;

