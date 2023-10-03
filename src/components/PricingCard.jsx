import { Link } from 'react-router-dom'
import './PricingCardStyle.css'
import React from 'react'

const PricingCard = () => {
    return (
        <div className='pricing'>
            <div className="card-container">

                <div className="card">
                    <h3>- Basic -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to={'/contact'}
                        className='btn'> Purchase Now
                    </Link>
                </div>

                <div className="card">
                    <h3>- Basic2 -</h3>
                    <span className="bar"></span>
                    <p className="btc ">$ 200</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to={'/contact'}
                        className='btn'> Purchase Now
                    </Link>
                </div>

                <div className="card">
                    <h3>- Basic3 -</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p>- 3 Days -</p>
                    <p>- 3 Pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsive Design -</p>
                    <Link to={'/contact'}
                        className='btn'> Purchase Now
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PricingCard