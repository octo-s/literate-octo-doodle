import {ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    theme: ETheme;
    toggleTheme: () => void

}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === ETheme.NORMAL ? ETheme.DARK : ETheme.NORMAL

        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}