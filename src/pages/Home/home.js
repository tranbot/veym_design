import React from 'react';
import Hero from '../../components/Hero';
import Carousel from '../../components/Carousel';

// const Home = () => (
//     <fragment>
//         <Hero backgroundImage="/images/temphero.png" />
//     </fragment>
// )

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Carousel />
            </div>
        )
    }
}

export default Home;