import React from "react";
import showdown from 'showdown'

const converter = new showdown.Converter({tables: true, tasklists: true, smoothLivePreview: true, strikethrough: true, simpleLineBreaks: true, splitAdjacentBlockquotes: true});
const Preview = (props) => {
    const md = props.markdown;
    const html = converter.makeHtml(md).replace('\u2026', '...');
    
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