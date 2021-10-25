import React from 'react';
import marked from 'marked'


import Textfield from '@mui/material/TextField';



const Editor = ({input, setInput, converted, setConverted}) => {

    const handleEditorInput = (event) => {
        setInput(event.target.value);
        setConverted(marked(input));
    }

    return (
        <div>            
            <Textfield id="editor" value={input} onChange={handleEditorInput} label="Editor" multiline minRows={5} />
            {/* HelperText??!! See https://mui.com/components/text-fields/ */}    
        </div>
    );

}

export default Editor;