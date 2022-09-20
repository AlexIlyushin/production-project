import React from 'react';
import {Link} from "react-router-dom";
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/libs/classNames/classNames";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: false, selectable: true}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Гланая</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;