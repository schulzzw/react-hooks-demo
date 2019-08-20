import React from 'react';
import CandidateView from './CandidateView';
import Other from './Other'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    jobs: [],
  }

  componentDidMount() {
    this.setState({
      jobs: [{
        id: 1,
        title: 'Simple Scrubber',
        pay: '$19/hr',
        companyName: 'Steve Timber\'s Tub Masters',
      },{
        id: 2,
        title: 'Trunk Flattener',
        pay: '$33/hr',
        companyName: 'Baby Got Back',
      },{
        id: 3,
        title: 'Ranch Thinner',
        pay: '$10/hr',
        companyName: 'Hidden Field',
      },{
        id: 4,
        title: 'Gauge Timer',
        pay: '$55/hr',
        companyName: 'Chernobyl No 4',
      },{
        id: 5,
        title: 'Gumby Race Hiker',
        pay: '$19/hr',
        companyName: 'Block Heads Inc',
      }]
    })
  }

  render() {
    return (
        <Router>
        <div className="App">
          <Route
            path={'/candidate'}
            render={routerProps => (
              React.createElement(
                CandidateView,
                {
                  ...routerProps,
                  jobs: this.state.jobs,
                },
                ))
              }
            />
          <Route
            exact
            path={'/other'}
            render={routerProps => (
              React.createElement(
                Other,
                {
                  ...routerProps,
                  jobs: this.state.jobs,
                },
                ))
              }
            />
        </div>
      </Router>
    );  
  }
}

export default App;
