import ItemCount from './ItemCount'

const ItemListContainer = ({greeting, style}) => {
    return (
        <div>
            <div>
                <h2 style={style}>{greeting}</h2>
            </div>
            <div>
                <ItemCount/>
            </div>
        </div>
    )
}
export default ItemListContainer