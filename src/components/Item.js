import { Link } from 'react-router-dom';


function Item({ producto }) {
    return (
        <div class="carta">
            <img className='cardImg' src={producto.img} alt={producto.title} />
            <h1 class="cardTitle">{producto.title}</h1>
            <p>{producto.artist}</p>
            <p class="price">USD {producto.price}</p>
            <p><button className='cardBtn'><Link to={"/item/" + producto.id}>SEE DETAILS</Link></button></p>
        </div>
    );
}
export default Item;