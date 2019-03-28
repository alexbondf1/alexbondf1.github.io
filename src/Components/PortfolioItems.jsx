import React from 'react'
import { Container, Row } from 'reactstrap'
import Slide from 'react-reveal/Slide';
import './PortfolioItems.css'

function PortfolioItems () {
    return (

        <div className="Center-Item">
        <Slide right>
        
        <Container className="PortfolioItems">
            <Row>
                <a href="https://vertrauen-us.com/" className="PortfolioLink">
                    <div className="PortfolioImage VCS"></div>
                    <h4>Vertrauen Chemie Solutions</h4>
                    <p>HTML - CSS</p>
                </a>
                
                <a href="https://ufufuru.github.io/movieknight/" className="PortfolioLink">
                    <div className="PortfolioImage MK"></div>
                    <h4>Movie Knight</h4>
                    <p>JavaScript - Node.js - Mongoose</p>
                </a>
                
                <a href="http://dotabuddy.xyz/companion/" className="PortfolioLink">
                    <div className="PortfolioImage DB"></div>
                    <h4>DotaBuddy</h4>
                    <p>Vue.js</p>
                </a>
                
                <a href="https://ufufuru.github.io/dallasdoubledoodles/" className="PortfolioLink">
                    <div className="PortfolioImage DDD"></div>
                    <h4>Dallas Double Doodles</h4>
                    <p>React.js</p>
                </a>
                
            </Row>
        </Container>
        </Slide>
        </div>
        
    ) 
}

export default PortfolioItems