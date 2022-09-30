import Item from "./Item"
import heart from "../images/heartvideogame.png"
import up from "../images/1up.png"

const ItemList = ({items}) => {
    return (
        <div>
            <span className="list-products-heart">
             
                <img className="heart" src={heart}/>
                <img className="up" src={up}/>
                <img className="heart" src={heart}/>
                <div className="list-product-text text-product-position">Lista de Productos</div>
                <img className="heart" src={heart}/>
                <img className="up" src={up}/>
                <img className="heart" src={heart}/>
           
            </span>


            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 background-border-cards">
                {items.map(item => <Item key={item.id} {...item} />)}
            </div>
        </div>
    )

}
export default ItemList