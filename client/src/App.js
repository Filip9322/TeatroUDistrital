import React, { Component } from 'react';
import logo from './logo.svg';
import './compiled/App.css';
import TheatreActivities from './Components/TheatreActivities'
import {Footer} from './Components/Footer'

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState(res))
      .catch(console.error);
  }

  callApi = async () => {
    const resp = await fetch('/api');

    window._resp = resp;

    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Teatro - Universidad Distrital</h1>
          <p className="tangerine">El teatro es tan infinitamente fascinante, porque es muy accidental, tanto como la vida.</p>
          <span className="tangerine">Arthur Miller</span>
        </header>
        <TheatreActivities />
        <Footer />
      </div>
    );
  }
}

export default App;
