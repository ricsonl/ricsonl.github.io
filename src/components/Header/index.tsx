import React from 'react';

import './styles.css';

import avatar from '../../assets/pp.png';

const Header = () => {
    return (
        <div>
            <img src={avatar} alt="Ricson" />
            <h4> I'm Ricson Vilaça. </h4>
        </div>
    );
}

export default Header;