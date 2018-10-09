import React from "react";
import "./Carousel.css";
// import { Carousel } from "react-responsive-carousel";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import  { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class CarouselPage extends React.Component  {
    render() {
        return  (
            <Container>
        
                <Carousel
                activeItem={1}
                length={5}
                showControls={true}
                showIndicators={true}
                className="z-depth-1">
                <CarouselInner>
                    <CarouselItem itemId="1">
                    <View>
                        <img className="d-block w-100" src="/images/slide1.png" alt="First slide" />
                        <Mask overlay="black-slight"></Mask>
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">Living the Eucharistic Day</h3>
                        <p>Taken at Doan Camp</p>
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                    <View>
                        <img className="d-block w-100" src="/images/slide2.png" alt="Second slide" />
                        <Mask overlay="black-slight"></Mask>
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">VEYM Benchmark Project</h3>
                        <p>Created by VEYM Benchmark Committee</p>
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                    <View>
                        <img className="d-block w-100" src="/images/slide3.jpg" alt="Third slide" />
                        <Mask overlay="black-slight"></Mask>
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">God is Love</h3>
                        <p>Taken at Vuon Len 35</p>
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="4">
                    <View>
                        <img className="d-block w-100" src="/images/slide4.jpg" alt="Mattonit's item" />
                        <Mask overlay="black-slight"></Mask>
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">VEYM Love</h3>
                        <p>Taken at Joshua 2018</p>
                    </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem itemId="5">
                    <View>
                        <img className="d-block w-100" src="/images/slide5.jpg" alt="Mattonit's item" />
                        <Mask overlay="black-slight"></Mask>
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">Cha Tom</h3>
                        <p>Taken at DHTT 2018</p>
                    </CarouselCaption>
                    </CarouselItem>
                </CarouselInner>
                </Carousel>
            </Container>
        );
    }
}

export default CarouselPage;