import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const Home = React.lazy(() => import('./Home'))

const App = () => (
    <React.Suspense fallback={<>...</>}>
        <Switch>
            <Route exact={true} path="/" component={Home}/>
        </Switch>
    </React.Suspense>
);

export default App;
