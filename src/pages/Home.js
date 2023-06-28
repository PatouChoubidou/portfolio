import React from 'react';
import {NavLink, Link, Navigate} from 'react-router-dom';


export function Home() {

    return (  
        <div className="content__wrapper">
            
                <section style={{display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
                    <h2>Willkommen</h2>
                    
                        <p 
                            style={{textAlign: 'center'}}>
                                Hier findet sich eine Sammlung von Projekten und Ideen. <br></br>
                        Webdesigns, Logos, Apps, Webseiten, Click-Dummies die während meines Studiums zum Entwickler oder früher entstanden sind.
                        </p>
                        <Link className="" to="/projects" style={{display: 'block', textAlign: 'center'}}>
                            <button className="btn--std">Projekte ansehen</button>
                        </Link>
                    
                </section>
        </div>
    )
}

export default Home;