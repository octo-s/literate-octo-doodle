import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button className={classNames('button')} onClick={toggleTheme}>Сменить тему</button>
            <AppRouter/>
        </div>
    );
};

export default App;