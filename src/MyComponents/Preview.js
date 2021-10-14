import React from "react";
import showdown from 'showdown'

const Preview = (props) => {
    const converter = new showdown.Converter({tables: true, tasklists: true, smoothLivePreview: true, strikethrough: true});
    const md = props.markdown;
    const html = converter.makeHtml(md);
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