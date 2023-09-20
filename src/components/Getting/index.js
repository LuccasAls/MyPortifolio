import React, { Component } from "react";
import Banner from "../../assets/bannerT.png"

import './styles.css';

class Getting extends Component {

    render() {
        return (
            <section className="container">
                <div className="box">
                    <div className="containerGetting"> 
                        <>
                            <h2 className="nameSpan">👋🏻 Olá, meu</h2>
                            <div className="nameSpanContainer"><h2 className="nameSpan">nome é</h2><h2 className="nameColor">Luccas</h2></div>
                        
                        </>
                        <div className="description">
                            <span>Seja bem vindo ao meu portifólio sou desenvolvedor Mobile, apaixonado por design UI / UX</span>
                        </div>
                    </div>

                    <div className="footerBox">
                        <button className="primary">
                            <span>Saiba Mais</span>
                        </button>
                        <div className="buttonCvContainer">
                            <button className="button cv" >
                                <span>Download CV</span>
                            </button>

                        </div>                        
                    </div>

                </div>
                <div className="bannerContainer">
                    <img className="bannerImg" src={Banner} height={700}/>
                </div>

            </section>
        )
    }
}

export default Getting