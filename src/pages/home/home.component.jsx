import React from 'react'

import './home.styles.scss'

import Header from '../../components/header/header.component'
import Hero from '../../components/hero/hero.component'
import Preview from '../../components/preview/preview.component'
import Footer
 from '../../components/footer/footer.component'
const Home = ()=>(
    <div>
        <Header />
        <Hero />
        <hr/>
        <Preview />
        <hr/>
        <Footer />
    </div>
)

export default Home