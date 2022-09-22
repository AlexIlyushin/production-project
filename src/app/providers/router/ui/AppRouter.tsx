import React, {Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    let elements = useRoutes(Object.values(routeConfig));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {elements}
        </Suspense>
    );
};

export default AppRouter;