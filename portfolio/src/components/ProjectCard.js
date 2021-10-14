import React from 'react'

function ProjectCard(props) {
    return (
        <div className="card-container">
            <img src={props.image}></img>
        </div>
    )
}

export default ProjectCard;