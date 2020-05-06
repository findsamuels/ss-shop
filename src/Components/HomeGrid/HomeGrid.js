import React from 'react'
import {Row, Col,} from 'react-bootstrap'
import Button from '../Button/Button'
import classes from './HomeGrid.module.scss'
import bedroomImage from '../../assets/img/bedroom.png'
import bathroomImg from '../../assets/img/bathroom.png'
import garden from '../../assets/img/garden.png'
import accessories from "../../assets/img/accessories.png";
import livingRoom from "../../assets/img/livingRoom.png";
import KitchenImg from "../../assets/img/kitchen.png";
import LazyLoad from 'react-lazy-load'
import { NavLink } from 'react-router-dom'
const homeGrid = (props) => {
const previewItems = {
  bedroom: {
    img: bedroomImage,
    alt: "bedroom",
    link: "/bedroom",
    button: "Bedroom",
  },
  bathroom: {
    img: bathroomImg,
    alt: "bathroom",
    link: "/bathroom",
    button: "Bathroom",
  },
  assessories: {
    img: accessories,
    alt: "accessories",
    link: "/accessories",
    button: "Accessories",
  },
  garden: {
    img: garden,
    alt: "garden",
    link: "/garden",
    button: "Garden",
  },
  livingRoom: {
    img: livingRoom,
    alt: "livingRoom",
    link: "/livingRoom",
    button: "Living Room",
  },
  kitchen: {
    img: KitchenImg,
    alt: "kitchen",
    link: "/kitchen",
    button: "Kitchen",
  },
};
    let homeGridArray = []
    for(let grid in previewItems){
        homeGridArray.push({
            id: grid,
            config: previewItems[grid]
        })
    }

    let showHomeGrid = homeGridArray.map(showGrid => {
        return (
          <Col key={showGrid.id} className={classes.grid} md="6">
            <LazyLoad>
              <div className={classes.HomeGridImgContainer}>
                <img
                  className={classes.HomeGridImg}
                  src={showGrid.config.img}
                  alt={showGrid.config.alt}
                />
              </div>
            </LazyLoad>
            <div className={classes.previewButton}>
              <Button btnSize="md" btnColor="primary" >
                <NavLink className={classes.NavText} to={showGrid.config.link}>{showGrid.config.button}</NavLink>
                
              </Button>
            </div>
            
          </Col>
        );
    })

    return(
        <React.Fragment>
            <Row className={classes.HomeGrid}>
             {showHomeGrid}
            </Row>
           
        </React.Fragment>
        
    )
}

export default homeGrid