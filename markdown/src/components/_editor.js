import React from 'react';
import marked from 'marked'

import Textfield from '@mui/material/TextField';

marked.setOptions({
    gfm: true,
    breaks:true
});

const Editor = ({input, setInput, setConverted}) => {

    const handleEditorInput = (event) => {
        setInput(event.target.value);
        setConverted(marked(event.target.value));
    }

    return (
        <div>            
            <Textfield id="editor" value={input} onChange={handleEditorInput} label="Editor" multiline minRows={5} />
            {/* HelperText??!! See https://mui.com/components/text-fields/ */}    
        </div>
    );

}

export default Editor;