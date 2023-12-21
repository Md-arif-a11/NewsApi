import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize =6;
  state = {
    progress:0
  }

  setProgress = (progress)=> {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
         <NavBar />
          
         <LoadingBar
         height={3}
         color='#f11946'
         progress={this.state.progress}
         />
          <Switch>
            <Route exact path="/" ><News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment"><News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News setProgress={this.setProgress}  key="geeneral" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><News setProgress={this.setProgress}  key="heealth" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress={this.setProgress}  key="sccience" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress}  key="spports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technlogy"><News setProgress={this.setProgress}  key="teechnlogy" pageSize={this.pageSize} country="in" category="technlogy" /></Route>
          </Switch>
        </Router>
      </div> 
    );
  }
}