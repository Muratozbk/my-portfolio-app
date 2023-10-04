import { Link } from 'react-router-dom';
import React1 from '../assets/react1.jpg'
import React2 from '../assets/react2.webp'

const AboutContent = () => {
    return (
        <div className='about flex flex-wrap justify-center items-center h-[100%] w-[100%] my-12'>
            <div className="leftSide max-w-[350px] text-center p-4 m-auto ">
                <h1 className='text-3xl/9 font-semibold'>Who Am I?</h1>
                <p className='text-lg/5 my-3'>Im a react front-end developer. I create responsive modern websites for my clients.</p>
                <Link to='/contact'>
                    <button className="btn px-10"> Contact</button> </Link>
            </div>
            <div className="rightSide max-w-[650px]">
                <div className="img-container max-w-[85%]">
                    <div className="img-stack top">
                        <img src={React1} alt="React"
                            className='img' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} alt="React"
                            className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent