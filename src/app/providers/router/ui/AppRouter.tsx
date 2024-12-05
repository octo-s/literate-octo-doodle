import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "app/providers/router/config";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route key={path} path={path as string} element={
                        <div className="page-wrapper">
                            {element}
                        </div>
                    } />
                    )
                )}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;