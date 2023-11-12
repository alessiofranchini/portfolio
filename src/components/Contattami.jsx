import React, { useState } from 'react';

function Contattami() {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSendEmail = () => {
        const { user_name, user_email, message } = formData;
        const emailBody = `Nome: ${user_name}\nEmail: ${user_email}\nMessaggio: ${message}`;
        const emailSubject = 'Messaggio dal modulo di contatto';

        const mailtoLink = `mailto:alessiofranchini1@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        window.location.href = mailtoLink;
    };

    return (
        <div>
            <h2 className='text-center mt-5 mb-5'>Contattami</h2>
            <form className="d-flex flex-column align-items-center responsive-form" id="contact-form">
                <div className="d-flex flex-column align-items-start">
                    <label className="fotmLabel mb-2" htmlFor="Name">
                        Nome
                    </label>
                    <input
                        type="text"
                        placeholder="Inserisci il tuo nome"
                        name="user_name"
                        id="Name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="form"
                    />
                </div>
                <div className="d-flex flex-column align-items-start">
                    <label className="fotmLabel mb-2 mt-1" htmlFor="mail">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Inserisci la tua email"
                        name="user_email"
                        id="mail"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="form"
                    />
                </div>
                <div className="d-flex flex-column align-items-start">
                    <label className="fotmLabel mb-2 mt-1" htmlFor="msg">
                        Messaggio
                    </label>
                    <textarea
                        placeholder="Inserisci il tuo messaggio"
                        name="message"
                        id="msg"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="form"
                    />
                </div>
                <button className='mt-2 mb-2' type="button" onClick={handleSendEmail}>
                    Invia
                </button>
            </form>
        </div>
    );
}

export default Contattami;
