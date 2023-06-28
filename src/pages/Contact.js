import React from 'react';
import {Link} from 'react-router-dom';
import OctoImage from '../components/OctoImage';

export function Contact() {

    const imgUrl = '/contact/portrait-patrice_1200x1200.png';

    return (
        <div className="content__wrapper">
            <section>
                    <h2>contact</h2> 
                    <div className="contact__wrapper" 
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            alignItems: 'center', 
                            justifyContent: 'center'
                        }}> 
                    <p style={{margin: "0 auto", width: "fit-content"}}>Hi, ihr wollt mehr wissen?</p>
                    <OctoImage src={imgUrl}></OctoImage>
                    <Link className="" to='mailto:patricekoebel@gmail.com' style={{margin: '30px auto'}}>
                            <button className="btn--std">Mail senden</button>
                    </Link>
                </div>
            </section>  
        </div>
    )
}

export default Contact;