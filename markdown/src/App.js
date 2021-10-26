import React, { useState } from 'react';
import { Box } from '@mui/system';
import marked from 'marked';

import './styles/main.css';

import Editor from './components/_editor';
import Preview from './components/_preview';

const App = () => {

  const defaultInput = `
  # H1
  ## H2
  
  [link](https://do-webdev.de)
  
  the \`Code is here\` in Text 
  \`\`\` 
  if (x) {
    this
  } else {
    that
  }
  \`\`\`
  **bold**
  _italic_
  
  >Blockquote

  - Ullist
  - second item

  1 Ollist
  1 second Item

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  const [input, setInput] = useState(defaultInput);
  const [converted, setConverted] = useState(marked(defaultInput));

  return (
    <div className="App">
      <Editor input={input} 
              setInput={setInput}
              setConverted={setConverted}
      />
      <Box  sx={{marginTop: 2, border: '1px solid black', borderRadius: 1,}}
            autoComplete="off"
      >
        <Preview converted={converted}/>
      </Box>  
      
    </div>
  );
}

export default App;
