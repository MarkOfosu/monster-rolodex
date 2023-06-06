

import './card.style.css'


const Card = ({monsters}) => {

    const {id, name,email} = monsters;

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

