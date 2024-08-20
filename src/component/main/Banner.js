import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <section id="banner">
            <div className="container-1620">
                <Link to="#">
                    <img src="img/promotionImg.jpg" alt="GORPCORE HIKING" className="img-fluid" />
                </Link>
            </div>        
        </section>
    )
}

export default Banner
