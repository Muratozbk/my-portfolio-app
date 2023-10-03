import { Link } from 'react-router-dom'
import React from 'react'

const PricingCard = () => {
    return (
        <div className='pricing py-24 px-4'>
            <div className="card-container max-w-6xl m-auto grid grid-cols-1 gap-10 md:max-w-[90%] md:grid-cols-3 ">

                <div className="card border-2 border-[#dedede] rounded p-4 text-center hover:bg-zinc-950">
                    <h3 className='text-2xl/6 p-4'>- Basic -</h3>
                    <span className="bar border-b-2 border-[#eee] w-[25%] block my-5 mx-auto"></span>
                    <p className="btc text-6xl font-semibold py-4 ">$ 100</p>
                    <p className='py-2.5'>- 3 Days -</p>
                    <p className='py-2.5'>- 3 Pages -</p>
                    <p className='py-2.5'>- Featured -</p>
                    <p className='py-2.5'>- Responsive Design -</p>
                    <Link to={'/contact'}
                        className='btn block w-[80%] mx-auto my-5'> Purchase Now
                    </Link>
                </div>


                <div className="card border-2 border-[#dedede] rounded p-4 text-center hover:bg-zinc-950">
                    <h3 className='text-2xl/6 p-4'>- Basic 2 -</h3>
                    <span className="bar border-b-2 border-[#eee] w-[25%] block my-5 mx-auto"></span>
                    <p className="btc text-6xl font-semibold py-4 ">$ 200</p>
                    <p className='py-2.5'>- 3 Days -</p>
                    <p className='py-2.5'>- 3 Pages -</p>
                    <p className='py-2.5'>- Featured -</p>
                    <p className='py-2.5'>- Responsive Design -</p>
                    <Link to={'/contact'}
                        className='btn block w-[80%] mx-auto my-5'> Purchase Now
                    </Link>
                </div>


                <div className="card border-2 border-[#dedede] rounded p-4 text-center hover:bg-zinc-950">
                    <h3 className='text-2xl/6 p-4'>- Basic 3 -</h3>
                    <span className="bar border-b-2 border-[#eee] w-[25%] block my-5 mx-auto"></span>
                    <p className="btc text-6xl font-semibold py-4 ">$ 300</p>
                    <p className='py-2.5'>- 3 Days -</p>
                    <p className='py-2.5'>- 3 Pages -</p>
                    <p className='py-2.5'>- Featured -</p>
                    <p className='py-2.5'>- Responsive Design -</p>
                    <Link to={'/contact'}
                        className='btn block w-[80%] mx-auto my-5'> Purchase Now
                    </Link>
                </div>



            </div>
        </div>
    )
}

export default PricingCard