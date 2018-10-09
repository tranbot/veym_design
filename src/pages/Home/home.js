import React from 'react';
import Hero from '../../components/Hero';
import Photosel from '../../components/Carousel';

// const Home = () => (
//     <fragment>
//         <Hero backgroundImage="/images/temphero.png" />
//     </fragment>
// )

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Photosel />
            </div>
        )
    }
}

export default Home;