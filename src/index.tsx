import {render} from 'react-dom'
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";

render(
    <div>
        <BrowserRouter future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)