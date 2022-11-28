import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'

export const Listagem = () => {

    const [personagens, setPersonagens] = useState([])

    useEffect(() => {
        let x = 1;
        let executa;

        async function requisiscao() {

            let personagens = []
            do {

                let resultado = await axios.get('https://rickandmortyapi.com/api/character/?page=' + x)

                let obj = [...personagens, ...resultado.data.results]
                personagens = obj

                resultado.data.info.next == null ? executa = false : executa = true

                x++
            } while (executa == true)

            setPersonagens(personagens)

            document.getElementById('nome').innerHTML = "Nome: " + personagens[0]['name']
        document.getElementById('status').innerHTML = "Status: " + personagens[0]['status']
        document.getElementById('especie').innerHTML = "Espécie: " + personagens[0]['species']
        document.getElementById('genero').innerHTML = "Gênero: " + personagens[0]['gender']
        document.getElementById('origem').innerHTML = "Origem: " + personagens[0]['origin']['name']


        document.getElementById('foto').setAttribute('src', personagens[0]["image"])

        document.getElementById('carregando').setAttribute('hidden', true)
        document.getElementById('pos').removeAttribute('hidden')

        }

        requisiscao()

    }, [])

    let personagemClicado;

    function onSelect(value) {

        personagemClicado = personagens.filter((person) => (person.id + ' - ' + person.name === value))

        document.getElementById('nome').innerHTML = "Nome: " + personagemClicado[0]['name']
        document.getElementById('status').innerHTML = "Status: " + personagemClicado[0]['status']
        document.getElementById('especie').innerHTML = "Espécie: " + personagemClicado[0]['species']
        document.getElementById('genero').innerHTML = "Gênero: " + personagemClicado[0]['gender']
        document.getElementById('origem').innerHTML = "Origem: " + personagemClicado[0]['origin']['name']


        document.getElementById('foto').setAttribute('src', personagemClicado[0]["image"])

        document.getElementById('carregando').setAttribute('hidden', true)
        document.getElementById('pos').removeAttribute('hidden')
    }


    return (
        <>
            <div id='divDropDown'>
                <label htmlFor="personagem">Escolha um personagem</label>
                <select className='form-select' onChange={(e) => { onSelect(e.target.value) }} name="personagem" id="personagem">
                    {
                        personagens.length === 0 ?
                            <option className='text-center'>Carregando...</option>
                            :
                            personagens.map(personagem => (

                                <option key={personagem.id} id={personagem.id}> {personagem.id} - {personagem.name}</option>

                            ))
                    }

                </select>
            </div>
            
            <div id='carregando' style={{textAlign: 'center', paddingTop: '50px'}}>
                    <h2>Carregando...</h2><div className="lds-hourglass"></div>
            </div>
            <div id='pos' hidden>
                <div id='detalhes'>
                    <h6 id='nome'></h6>
                    <h6 id='status'></h6>
                    <h6 id='especie'></h6>
                    <h6 id='genero'></h6>
                    <h6 id='origem'></h6>
 
                </div>

                <br />
                <img id='foto' src="" alt="" />
            </div>
        </>
    )
}