import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";

class Photosel extends React.Component{
    render() {
        return(
            <Carousel showArrows={true} showIndicators={true}>
                <div>
                    <img src="/images/slide1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/images/slide2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/images/slide3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/images/slides4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="/images/slide5.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        );
    }
}

export default Photosel;