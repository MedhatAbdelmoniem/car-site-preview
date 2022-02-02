import React from 'react'

import './shop.styles.scss'

import Card from '../../components/card/card.component';
import cars from "../../assets/content-like-data";

const Shop = ()=>(
    <div className='shop'>
        {cars.map((car)=>(
            <Card {...car}/>
        ))}
    </div>
)

export default Shop