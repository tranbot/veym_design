import React from 'react';
import Hero from '../../components/Hero';
import CarouselPage from '../../components/Carousel';

// const Home = () => (
//     <fragment>
//         <Hero backgroundImage="/images/temphero.png" />
//     </fragment>
// )

class Home extends React.Component {
    render() {
        return (
            <CarouselPage />
        )
    }
}

export default Home;