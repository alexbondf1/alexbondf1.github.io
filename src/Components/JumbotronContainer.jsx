import React from 'react'
import { Jumbotron } from 'reactstrap'
import './JumbotronContainer.css'

function JumbotronContainer() {
    return (
            <Jumbotron fluid className="Jumbotron">
                <div className="JumbotronContent">
                    <h1>Alex Bond</h1>
                    <h4>Front-end Developer</h4> 
                </div>
            </Jumbotron>
    )
}

export default JumbotronContainer
