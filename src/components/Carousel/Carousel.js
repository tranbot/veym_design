import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Photosel extends React.Component{
    render() {
        return(
            <Carousel showArrows={true} showIndicators={true} showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
                <div>
                    <img className="slides" src="/images/slide1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="slides" src="/images/slide2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="slides" src="/images/slide3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className="slides" src="/images/slide4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img className="slides" src="/images/slide5.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        );
    }
}

export default Photosel;