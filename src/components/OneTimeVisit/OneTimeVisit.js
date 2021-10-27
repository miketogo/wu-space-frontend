import React from 'react';

import './OneTimeVisit.css'


function OneTimeVisit(props) {
    return (
        <section className="one-time">
            <h2 className="one-time__title">Разовое посещение</h2>
            <div className="one-time__handlers">
                <p className="one-time__handler one-time__handler_active">offline</p>
                <p className="one-time__handler">online</p>
            </div>
            <div className="one-time__card-container">
                <div className="one-time__card one-time__card_ofline"></div>
            </div>
        </section>
    );
}

export default OneTimeVisit;
