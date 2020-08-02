import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
import './app.scss';

const App = () => {
    return (
        <Router>
            <Layout>
                <Route path="/" component={() => <div>CONTENT</div>} />
            </Layout>
        </Router>
    );
};

export default App;
