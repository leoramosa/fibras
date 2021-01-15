import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import { Router } from '@reach/router' */
import Home from  '../pages/Home'
import About from  '../pages/About'
import Services from  '../pages/Services'
import NotFound from  '../pages/NotFound'
import Contact from  '../pages/Contact'
import Layout from '../pages/Layout';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollTop from '../components/ScrollTop';

function App ()  {
  const initialState = useInitialState()

  return (
    <BrowserRouter>
      <ScrollTop/>
      <AppContext.Provider value={initialState}>
          <Layout>
          <Switch>
          <Route  exact path="/" component={Home} />
          <Route  exact path="/nosotros" component={About} />
          <Route  exact path="/servicios" component={Services}  />
          <Route  exact path="/contacto"  component={Contact} />
          <Route component={NotFound} />
        </Switch>
        </Layout>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
