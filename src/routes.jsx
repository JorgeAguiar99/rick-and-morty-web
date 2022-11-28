import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detalhes } from './pages/Detalhes';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/detalhes'
                    element={<Detalhes />}
                />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;