import React from 'react';
import Hero from '../../components/Hero';

const Home = () => (
    <fragment>
        <Hero backgroundImage="/images/hero.jpg">
            <div className="text-white">
                <h1 className="hero-text opensans">Resources</h1>
            </div>
        </Hero>
    </fragment>
)

export default Home;