import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import React from 'react'

const ItemListContainer = ({id, title, price, pictureURL}) => {
    return (
        <Link to = {`/${id}`}>
            <div className="bg-white flexi-box">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">

                        <div className=''>
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img
                                src={pictureURL}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default ItemListContainer