import React from "react";
import { Link } from 'react-router-dom'

import './hero.styles.scss'

const Hero = ()=>(
    <div className="hero">
        <h1>The Future is NOW</h1>
        <Link to='shop'>Explore Vehicles</Link>
    </div>
)

export default Hero