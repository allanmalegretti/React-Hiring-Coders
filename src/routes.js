import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from "./pages/Repositories";
import Home from "./pages/Home";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact='true' element={<Home />} />
                <Route path='/repositories' element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    )
}