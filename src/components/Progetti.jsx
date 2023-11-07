import React from 'react';

function Progetti() {
    return (
        <div className="container text-center">
            <h2 className='text-center mt-5 mb-5'> Progetti </h2>
            <div className="row">
                <div className="col-md-3">
                    <a href="https://www.tuopagina1.com" target="_blank" rel="noopener noreferrer">
                        <img src="url-immagine-1.jpg" alt="" />
                    </a>
                    <p>Testo per il Progetto 1</p>
                </div>

                <div className="col-md-3">
                    <a href="https://www.tuopagina2.com" target="_blank" rel="noopener noreferrer">
                        <img src="url-immagine-2.jpg" alt="" />
                    </a>
                    <p>Testo per il Progetto 2</p>
                </div>

                <div className="col-md-3">
                    <a href="https://www.tuopagina3.com" target="_blank" rel="noopener noreferrer">
                        <img src="url-immagine-3.jpg" alt="" />
                    </a>
                    <p>Testo per il Progetto 3</p>
                </div>

                <div className="col-md-3">
                    <a href="https://www.tuopagina4.com" target="_blank" rel="noopener noreferrer">
                        <img src="url-immagine-4.jpg" alt="" />
                    </a>
                    <p>Testo per il Progetto 4</p>
                </div>
            </div>
        </div>
    );
}

export default Progetti;
