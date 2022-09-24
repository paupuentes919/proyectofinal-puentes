import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({greeting, style}) => {
    return (
        <div>
            <div>
                <h2 style={style}>{greeting}</h2>
            </div>
            <div>
                <ItemCount/>
                <ItemList/>
            </div>
        </div>
    )
}
export default ItemListContainer