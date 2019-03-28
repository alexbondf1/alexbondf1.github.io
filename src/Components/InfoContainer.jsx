import React from 'react'
import Slide from 'react-reveal/Slide'
import { Container, Row } from 'reactstrap'
import './InfoContainer.css'

function InfoContainer() {
    return (
        <div>
            <Container fluid className="InfoContainer">
                <Row className="Bio">
                    Hey I'm Alex. I am a front-end web developer with a bachelor's degree in Emerging Media and Communications from the University of Texas at Dallas. I have been creating websites for about 10 years now, starting out with video game fansites on GeoCities. I have professional experience designing and developing corporate pages for small businesses in the Dallas area, as well as some experience with backend technologies like Node.js and MongoDB working on things like cool Discord bots! When I am not coding, I am watching watching the Mavericks play or having my cat Yuri chase a laser pointer around my apartment all day.
                </Row>
                <Row className="Tech">
                    Some of the technologies I am proficient with include: 
                </Row>
                <Slide left>
                <Row className="TechList">
                    <div className="TechLogo">
                        <img src="img/html.png" alt="" className="TechImage"/>
                        <p>★★★★★</p>       
                    </div>
                    <div className="TechLogo">
                        <img src="img/dcc.png" alt="" className="TechImage"/>
                        <p>★★★★</p>       
                    </div>
                    <div className="TechLogo">
                        <img src="img/js.png" alt="" className="TechImage"/>
                        <p>★★★★★</p>       
                    </div>
                    <div className="TechLogo">
                        <img src="img/bb.png" alt="" className="TechImage"/>
                        <p>★★★★★</p>       
                    </div>
                    <div className="TechLogo">
                        <img src="img/react.png" alt="" className="TechImage"/>
                        <p>★★★★</p>       
                    </div>
                    <div className="TechLogo">
                        <img src="img/node.png" alt="" className="TechImage"/>
                        <p>★★★</p>       
                    </div>
                    <div className="TechLogo">
                        <img src="img/mongo.png" alt="" className="TechImage"/>
                        <p>★★★</p>       
                    </div>
                </Row>
                </Slide>
            </Container>
        </div>
        
    )
}

export default InfoContainer