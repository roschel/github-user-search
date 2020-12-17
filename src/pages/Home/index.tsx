import Button from 'core/components/Button';
import React from 'react';
import './styles.css';

const Home = () => (
    <div className="home">
        <div className="titulo">
            Desafio do Capítulo 3, Bootcamp DevSuperior
        </div>
        <div className="sub-titulo">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com</p>
        </div>
        <Button text="Começar"/>
    </div>
)

export default Home;
