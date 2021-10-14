import React from 'react'

const Editor = (props) => {
    return (
        <div>

            <textarea onChange={props.onChange} value={props.markdown} name="editor" id="editor" cols="80" rows="50"></textarea>
        </div>
    )
}

export default Editor