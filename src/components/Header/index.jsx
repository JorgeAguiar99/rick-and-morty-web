import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export const Header = ({ paginaAtual }) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#356f72', color: 'whitesmoke' }} >
                <div className="container-fluid">

                    <h3>Hackathon</h3>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" style={{ paddingLeft: '20px' }}>
                                <NavLink className={`nav-link ${paginaAtual === 'Home' && 'active'}`} to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${paginaAtual === 'Detalhes' && 'active'}`} to="/detalhes">
                                    Detalhes
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}