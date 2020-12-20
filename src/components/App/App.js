import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './../Layout';
import Home from '../Home/Home';

function App() {
    return(
        <BrowserRouter>
           <Layout>
               <Switch>
                   <Route path="/Home" component={Home} />
               </Switch>
           </Layout>
        </BrowserRouter>
    );
}

export default App;