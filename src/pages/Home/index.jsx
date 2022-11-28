import img from './../../imagens/middleFinger.png'
import { Footer } from './../../components/Footer'
import React, { Component, useEffect, useState } from "react";
import { Header } from './../../components/Header'
import './style.css'

export const Home = () => {


    useEffect(() => {

        function rotate() {
            let imagem = document.getElementById('imagem');

            angle += 720;

            imagem.style.transform = 'rotate(' + angle + 'deg) scale(0.1)'
            console.log("Passou - " + angle)
            setTimeout(() => {
                angle += 720;
                imagem.style.transform = 'rotate(' + angle + 'deg) scale(1)'

            }, 600)
        }

        let imagem = document.getElementById('imagem');
        // let angle = 0
        let angle = imagem.getAttribute('angle')

        imagem.addEventListener('click', () => { rotate() })
        rotate()
    });

    return (
        <>
            <Header paginaAtual={"Home"} />
            <div className='container-fluid text-center'>
                <h3 className='titulo'>
                    Rick and Morty Web API
                </h3>

                <img className='rotate' id='imagem' width='30vw' src={img} />

                <h4>
                    Este sistema consiste em realizar o consumo da API pública The RickAndMortyAPI e exibir seus dados de forma clara ao usuário
                </h4>

            </div>

            <Footer />

        </>
    )
}