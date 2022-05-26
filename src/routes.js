import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from "./Repositories";
import Home from "./Home";

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