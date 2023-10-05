import WorkCard from './WorkCard';
import WorkCardData from '../data/WorkCardData'
import React from 'react';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className="project-heading text-3xl/7 font-semibold">PROJECTS </h1>
            <div className="project-container">

                {WorkCardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source ?? "https://github.com/Muratozbk"} />
                    )
                })}
            </div>
        </div>
    )
}


export default Work;