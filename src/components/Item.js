import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Item({ producto }) {
    const notify = () => toast.info("Loading...");
    return (
        <div class="carta">
            <img className='cartaImg' src={producto.img} alt={producto.title} />
            <h1 class="cardTitle">{producto.title}</h1>
            <p>by {producto.artist}</p>
            <p class="price">USD {producto.price}</p>
            <p><button onClick={notify}><Link to={"/item/" + producto.id}>See details</Link></button></p>
        </div>
    );
}
export default Item;