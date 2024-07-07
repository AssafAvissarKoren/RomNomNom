import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ButtonPage } from './pages/ButtonPage.jsx'; // Component with the button and its effects

export function App() {
    return (
        <Router>
            <section className='main-app'>
                <main className='container'>
                    <Routes>
                        <Route path="/" element={<ButtonPage />} />
                    </Routes>
                </main>
            </section>
        </Router>
    );
}
