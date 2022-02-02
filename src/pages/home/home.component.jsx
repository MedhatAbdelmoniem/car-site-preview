import React from 'react'

import './home.styles.scss'

import Hero from '../../components/hero/hero.component'
import Preview from '../../components/preview/preview.component'

const Home = ()=>(
    <div>
        <Hero />
        <hr/>
        <Preview />
    </div>
)

export default Home