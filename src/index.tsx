import {render} from 'react-dom'
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import "./shared/config/i18n/i18n";
import {ErrorBoundary} from "app/providers/ErrorBoundary";

render(
    <div>
        <BrowserRouter
            basename={BASENAME}
            future={{
                v7_startTransition: true,
                v7_relativeSplatPath: true,
            }}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
)