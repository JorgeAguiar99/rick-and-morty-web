import img from './../../imagens/middleFinger.png'
import { Footer } from './../../components/Footer'
import React, { Component, useEffect, useState } from "react";
import { Header } from './../../components/Header'
import './style.css'

export const Home = () => {

    const [scale, setScale] = useState(1);
    const [angle, setAngle] = useState(0);

    useEffect(() => {
        let imagem = document.getElementById('imagem');

        function rotate() {
            imagem.style.transform = `rotate(${angle})deg)`
        }

        function reduzImagem() {
            imagem.style.transform = `scale(${scale})}`
        }

        function aumentaImagem() {
            imagem.style.transform = `scale(${scale})}`
        }

        imagem.addEventListener('click', () => {
            setAngle(720)
            setScale(1)

            rotate()
            reduzImagem()
            aumentaImagem()
        })

    }, [])

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