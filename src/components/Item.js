import {Link} from 'react-router-dom'
import React from 'react'


const Item = ({id, title, price, pictureURL}) => {
    return (
        <Link to = {`/item/${id}`}>
            <div className=" flexi-box">
                <div className='group'>
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg background-card xl:aspect-w-7 xl:aspect-h-8">
                        <img
                            src= {pictureURL}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    </div>
                    <div className="item-card">
                        <h3 className="mt-4 packman-navbar-2 text-gray-700">{title}</h3>
                        <p className="mt-1 text-lg packman-navbar-2 font-medium text-gray-900">$ {price}</p>
                    </div>
                </div>
            </div>
        
        </Link>
    )
}
export default Item