import React from "react";
import { useState } from 'react';
import './Footer.css';

function Footer() {
	const [inputValue, setInputValue] = useState('Entrez votre e-mail');
    const checkConformity = (email) => {
        if (!email.includes('@')) {
            alert("Merci de renseigner un e-mail valide");
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue(e.target.value);   
    }

	return (
		<footer>
			<div className='footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='footer-elem'>Laissez-nous votre mail :</div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' defaultValue={ inputValue } onBlur={(e) => checkConformity(e.target.value)} />
                <button type='submit'>Envoyer</button>
            </form>
		</footer>
	);
}

export default Footer;