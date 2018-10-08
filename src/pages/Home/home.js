import React from 'react';
import Hero from '../../components/Hero';

const Home = () => (
    <fragment>
        <Hero backgroundImage="/images/temphero.png">
            <div className="text-white">
                <h1 className="hero-text opensans">Welcome to VEYM USA</h1>
            </div>
        </Hero>
    </fragment>
)

export default Home;