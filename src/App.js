import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./Home'))

const App = () => (
    <React.Suspense fallback={<>...</>}>
        <Routes>
            <Route path="/" element={<Home></Home>}/>
        </Routes>
    </React.Suspense>
);

export default App;
