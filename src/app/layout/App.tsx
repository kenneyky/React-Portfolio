import React from 'react';
import {Container} from 'semantic-ui-react'
import {Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Portfolio } from '../../features/portfolio/Portfolio';



function App() {
  
  return (
    <Container fluid>
      <Route exact path='/' component={Portfolio} />
    </Container>
  );
}

export default App;
