import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './../Layout';
import HomePage from './../HomePage/HomePage';
import Prueba from './../Prueba';

function App() {
    return(
        <BrowserRouter>
           <Layout>
               <Switch>
                   <Route path="/HomePage" component={HomePage} />
                   <Route path="/Prueba" component={Prueba} />
               </Switch>
           </Layout>
        </BrowserRouter>
    );
}

export default App;