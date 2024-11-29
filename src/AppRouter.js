import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, {
    useState,
    useEffect
} from "react";
import WeightMonitor from './Pages/WeightMonitor';

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={WeightMonitor} />
            </Routes>
        </Router>
    );
}
export default AppRouter;
