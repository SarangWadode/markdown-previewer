import React, { Component } from 'react'
import './App.css';
import Toolbar from './Toolbar'
import Editor from './Editor'
import Preview from './Preview'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="editor">
          <Toolbar title="Editor" />
          <Editor onChange={this.handleChange} markdown={this.state.markdown} />
        </div>

        <div className="preview">
          <Toolbar title="Preview" />
          <Preview markdown={this.state.markdown} />
        </div>
      </div>
    )
  }
}

const placeholder = `# Markdown Previewer
___

## What is markdown?
Markdown is a lightweight markup-language, for creating rich text. You can easily create lists, code blocks, headings etc. using markdown.

## Basic Syntax
- Create a list item by just adding a \`-(hyphen)\` at start of the line
    - You can also create a nested list item
- Create a **bold text** by surrounding it with \`double *\`, or _italic_ by surrounding with \`_(underscores)\`.

- Are you a programmer, and want to add a code Block, here's a way to add a python code block
py
# Comment is shown in faint color
print('Syntax is highlighted as per language specified above')


- You can create a [link to another page](https://google.com)
- Want to insert an image, don't worry add image with just a line as in below
![A Clock](https://cdn.glitch.com/4b4a34ca-c63e-47d2-ad3f-a615bbf4ddc3%2Fclock.svg?v=1612898725841) ⬅ Image of a clock

> You can look at [Basic Syntax](https://www.markdownguide.org/basic-syntax/) of markdown, if you're complete new, else take a look at [Extended Markdown Guide](https://www.markdownguide.org/extended-syntax/), if you're somewhat familiar with the markdown.

## How this page works?
- This page uses a third party Library [Marked JS](https://markedjs.org), yo generate html equivalent of the \`raw text\` inputted in this **textbox**
- For the syntax highlighting purpose, [highlight.js](https://highlightjs.org) is used

`;