import logo from './logo';
import './App.css';
import TextButtons from './Component'
import SignInSide from './login'
import React from "react";
import { Segment } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Video from './Video';
import Form from './Form'
import CircularIntegration from './Terms'




function App() {
  return (
    <Router>
     
      <div className="App">
        
        <header >
            <div className="App-header1">
                <div>
                      <Nav/>
                </div>
                
            </div>        
        </header>
  
        <body>
            <Segment>
              <div>  
                  <div>
                    <div>
                      <Switch>
                          <Route path="/" exact component={logo}/> 
                          <Route path="/home" exact component={logo}/> 
                          <Route path="/Video" component={Video}/>
                          <Route path="/Register" exact component={Form}/> 
                          
                          <Route path="/LogIn" component={SignInSide}/>
                      </Switch>
                    </div>
                  </div> 
              </div>
              
            </Segment> 
            
        </body>
          
        
        <footer>
          <div className="App-Footer">
              <div class="ui black vertical footer segment">
                    <div class="ui center aligned container">
            
                    </div>
                </div>  
          </div>
        </footer>        
      </div>
    </Router>
    
  );
}

/* 

<TextButtons/>
        
    
        <SignInSide/>*/

export default App;
