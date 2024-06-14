import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import CurriculoPage from '../pages/CurriculoPage'
import ProjetosPage from '../pages/ProjetosPage'


const Routear = () => {
    return (
        <Router>
            <Header />
            <Navbar />
            <div className="p-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre-mim" element={<AboutPage />} />
                    <Route path="/curriculo" element={<CurriculoPage />} />
                    <Route path="/projetos" element={<ProjetosPage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Routear