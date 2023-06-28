import React , { useState } from 'react';
import data from '../assets/data/projects.json';
import OctoButton from './OctoButton';


export function Modal(props) {
    const projectId = props.id;
    const project = data[projectId-1];
    const slides = project.imgs || null;

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const closeFunc = props.closeFunc;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        
        <div className="modal__wrapper">
            <OctoButton func={nextSlide} symbol="›" extraClass="modal__arrow--right" />
            <OctoButton func={prevSlide} symbol="‹" extraClass="modal__arrow--left" />
            <OctoButton func={closeFunc} symbol="×" extraClass="modal__close" />
           { slides ?
            slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                    {index === current && (
                        <img src={"/projects/" + projectId + "/" + slide} alt={project.name} className='modal__img' />
                    )}    
                    </div>
                    ); 
            }): null}

            <div className="modal__circle__wrapper">
                    {slides.map((slide, index) => {
                        return (
                            <div className={index === current ? 'modal__circle active' : 'modal__circle'}
                                key={index}></div>
                            );
                    })}
            </div>
        </div>
    )
}

export default Modal;