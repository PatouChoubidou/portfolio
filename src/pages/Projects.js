
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import data from '../assets/data/projects.json';
import Modal from '../components/Modal';

export function Projects() {

    const getFilterTags = () => {
        const allTags = [];
        data.forEach((project) => { 
            project.tags.forEach( (tag) => {
                if(!allTags.includes(tag)){
                allTags.push(tag);
                }
            })
        })
        return allTags
    } 

    const filterProjects = (tag) => {  
        console.log(tag);
        let filtredProjects = data.filter(project => project.tags.includes(tag));
        return filtredProjects;
    }

    const allFilterTags = getFilterTags();
   
    
    /* const [currentActiveFilters, setCurrentActiveFilters] = useState([]); */
    const [resultSet, setResultSet] = useState(data);
    const [showImgModal, setShowImgModal] = useState(false);
    const [currentProjectID, setCurrentProjectID] = useState(0);
    

   /*  console.log('rerender', 'currentActiveFilters: ', currentActiveFilters);  */
    console.log('rerender', 'resultSet: ', resultSet, 'currentImgId', currentProjectID); 
   
   
    const handleFilterBtn = (e) => {
       let filter = e.target.name;
       const allFilterTags = document.querySelectorAll('.filter-wrapper__tags button');
       allFilterTags.forEach((button) => {button.classList.remove('active')})
       e.target.classList.add('active');
       filter !== "all"
        ? setResultSet(filterProjects(filter))
        : setResultSet(data); 
    }

    const handleImgClick = (e, id) => {
        setCurrentProjectID(id);
        setShowImgModal(true);
        console.log('hello from imgClick');
    }

    const closeImgOverlay = (e) => {
        setCurrentProjectID(0);
        setShowImgModal(false);
        console.log('hello from imgClose');
    }

    const renderFilterButtons = () => {
        return(
            <div className="filter-wrapper">
                <div className="filter-wrapper__resultCount">
                    <div>#</div>
                    <div>{String(resultSet.length).padStart(2, '0')}</div>
                </div>
                <div className="filter-wrapper__tags">
                   
                        <button name="all" onClick={handleFilterBtn} className="active">all</button>
                    
                    {allFilterTags.map((tag, i) => {
                        return(
                                <button name={tag} onClick={handleFilterBtn} className="">{tag}</button>
                            )
                        })
                    }
                </div>  
            </div>
        )
    }

    const renderProjects = () => {
        return(
            
            resultSet.map((project, i) => (
                <article key={i} className='project__wrapper'>
                
                    <h3>{project.title}</h3>

                    <div className="project__tags">
                        {project.tags.map((tag, index) => {
                                return(
                                   <div key={index} className="tag">{tag}</div>
                                )
                            })}
                    </div>
                    <div className="project__date">{project.date}</div>

                    <div className="project__imgs" onClick={(e)=>handleImgClick(e, project.id)}>
                        {project.imgs.map((img, i) => {
                            if(i < 2){
                            return(
                                <div key={i} className="octo-img__bg">
                                    <div className="octo-img__wrapper">
                                        <img src={"/projects/" + project.id + "/" + img}  alt={project.name} />
                                    </div>
                                </div>
                            )
                        }
                        })}
                    </div>

                    <div className="project_desc">
                        <p>{project.desc}</p>
                    </div>

                    {project.link ? 
                        <Link className="project__link" to={project.link} target='_blank'>{project.link}</Link>
                    : null}
               </article>
            ))
        )
    }

    return ( 
        <div className="content__wrapper">
            
            <section>
                <h2>projects</h2>
                { showImgModal && currentProjectID !== 0 ?
                    <Modal id={currentProjectID} closeFunc={closeImgOverlay} />
                : null }
                {renderFilterButtons()}
                {renderProjects()}
            </section>
        </div>
    )
}

export default Projects;