import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from './../../components/Footer'
import { Header } from './../../components/Header'
import { Listagem } from '../../components/Listagem'
import './style.css'



export const Detalhes = () => {

    return (
        <>
            <Header paginaAtual={"Detalhes"} />
            <div className=''>
                <Listagem />

                

            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}