import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
        </div>
    );
};

export default App;