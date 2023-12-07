import React from 'react';
import capstone from '../assets/img/capstone.png';
import netflix from '../assets/img/netflix.png';
import meteo from '../assets/img/meteo.png';
import stay from '../assets/img/stay.png';
import pub from '../assets/img/pub.png';
import calcolatrice from '../assets/img/calcolatrice.png';

function Progetti() {
    return (
        <div className="container text-center">
            <h2 className='text-center mt-5 mb-5'> Progetti </h2>
            <div className="row">
                <div className="col-md-3">
                    <a href="https://github.com/alessiofranchini/capstone_auto" target="_blank" rel="noopener noreferrer">
                        <img className='scheda-progetti' src={capstone} alt="" />
                    </a>
                    <p className='mt-1'>Capstone</p>
                </div>

                <div className="col-md-3">
                    <a href="https://github.com/alessiofranchini/netflix-project" target="_blank" rel="noopener noreferrer">
                        <img className='scheda-progetti' src={netflix} alt="" />
                    </a>
                    <p className='mt-1'>Netflix</p>
                </div>

                <div className="col-md-3">
                    <a href="https://github.com/alessiofranchini/w10-d5-weather-app" target="_blank" rel="noopener noreferrer">
                        <img className='scheda-progetti' src={meteo} alt="" />
                    </a>
                    <p className='mt-1'>Meteo</p>
                </div>

                <div className="col-md-3">
                    <a href="https://github.com/alessiofranchini/epicode/tree/main/WEEK%205/eserzio%20settimanale" target="_blank" rel="noopener noreferrer">
                        <img className='scheda-progetti' src={stay} alt="" />
                    </a>
                    <p className='mt-1'>Medium</p>
                </div>

                <div className="col-md-3">
                    <a href="https://github.com/alessiofranchini/sito-web-locale" target="_blank" rel="noopener noreferrer">
                        <img className='scheda-progetti' src={pub} alt="" />
                    </a>
                    <p className='mt-1'>Sito web locale</p>
                </div>

                <div className="col-md-3">
                    <a href="https://github.com/alessiofranchini/epicode/tree/main/WEEK%202/esercizio%20settimanale" target="_blank" rel="noopener noreferrer">
                        <img className='scheda-progetti' src={calcolatrice} alt="" />
                    </a>
                    <p className='mt-1'>Calcolatrice</p>
                </div>
            </div>
        </div>
    );
}

export default Progetti;
