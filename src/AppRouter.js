import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React, {
    useState,
    useEffect
} from "react";
import WeightMonitor from './Pages/WeightMonitor';
import History from './Pages/History';

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={WeightMonitor} />
                <Route exact path="/history" Component={History} />
            </Routes>
        </Router>
    );
}
export default AppRouter;
