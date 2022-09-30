import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import React from 'react'

const ItemListContainer = ({id, title, price, pictureURL}) => {
    return (
        <Link to = {`/${id}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-full lg:max-w-7xl m-auto'>{title}</div>
        </Link>
    )
}
export default ItemListContainer