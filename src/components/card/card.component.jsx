import React from 'react'

import './card.styles.scss'

const Card = ({ carName, description, price, imageUrl })=>(
    <div className='card'>
        <img src={process.env.PUBLIC_URL + imageUrl}  alt='carPic' />
            <h1><b>{ carName }</b></h1>
            <p>{ description }</p>
            <h3>{ price }</h3>
    </div>
)

export default Card