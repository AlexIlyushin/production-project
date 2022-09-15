import React, {Suspense} from 'react';
import {Routes, Route} from "react-router-dom";
import './index.scss'
import {Link} from 'react-router-dom';
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>Гланая</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;