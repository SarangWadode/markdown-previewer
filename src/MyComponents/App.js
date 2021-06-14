import React, { Component } from 'react'
import './App.css';
import Toolbar from './Toolbar'
import Editor from './Editor'
import Preview from './Preview'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      markdown: '',

    }
  }
  render() {
    return (
      <div className="App">
        <div className="editor">
          <Toolbar />
          <Editor />
        </div>

        <div className="preview">
          <Toolbar />
          <Preview />
        </div>
      </div>
    )
  }
}
