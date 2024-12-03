import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";

const PATHS = {
    main: '/',
    about: `/about/`
}

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link className="link" to={PATHS.main}>Главная</Link>
            <Link className="link" to={PATHS.about}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;