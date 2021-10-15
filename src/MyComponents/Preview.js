import React from "react";
//import showdown from 'showdown'
import marked from 'marked'
import Prism from 'prismjs'

const Preview = (props) => {
    // const converter = new showdown.Converter({tables: true, tasklists: true, smoothLivePreview: true, strikethrough: true});
    // const md = props.markdown;
    // const html = converter.makeHtml(md);

    marked.setOptions({
      breaks: true,
      highlight: function (code) {
        return Prism.highlight(code, Prism.languages.javascript, 'javascript');
      }
    });
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      return `<a target="_blank" href="${href}">${text}</a>`;
    };

    const md = props.markdown;
    const html = marked(md, {renderer: renderer})
    return (
        <div
      dangerouslySetInnerHTML={{
        __html: html
      }}
      id="preview"
    />
    )
}

export default Preview;