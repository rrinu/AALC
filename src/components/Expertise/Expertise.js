import React from 'react';
import './Expertise.css';
import tele from './tele.jpg';
import consulting from './legal consulting.jpg';
import writing from './legal writing.jpg';
import bussiness from './bussiness law.jpg';
import corporate from './corporate law.jpg';
import it from './it law.jpg';

class Expertise extends React.Component{
    componentDidMount() {
        const cards = document.querySelectorAll('.img-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('zoom', 'color');
                } else {
                    entry.target.classList.remove('zoom', 'color');
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));
    }

    render(){
        return(
            <section id="services">
            <div className='expertise'>
                <h1 className='exp-header'>My Expertise</h1>
                <div className='cards'>
                <div className='card1'>
                        <img className='img-card' src={consulting} />
                        <h3>Legal consulting</h3>
                    </div>
                    <div className='card2'>
                    <img className='img-card' src={writing} />
                        <h3>Legal Writing</h3>
                    </div>
                    <div className='card3'>
                        <img className='img-card' src={tele} />
                        <h3>Telecommunication</h3>
                    </div>
                    <div className='card4'>
                    <img className='img-card' src={bussiness} />
                        <h3>Bussiness Law</h3>
                    </div>
                    <div className='card5'>
                    <img className='img-card' src={corporate} />
                        <h3>Corporate Law</h3>
                    </div>
                    <div className='card6'>
                    <img className='img-card' src={it} />
                        <h3>Information Technology Law</h3>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Expertise;