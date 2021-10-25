import React, { useState } from 'react';
import { Box } from '@mui/system';
import marked from 'marked';

import './styles/main.css';

import Editor from './components/_editor';
import Preview from './components/_preview';

const App = () => {

  const defaultInput = '# H1 ## H2 (link)[https://do-webdev.de]';

  const [input, setInput] = useState(defaultInput);
  const [converted, setConverted] = useState(marked(defaultInput));

  return (
    <div className="App">
      <Editor input={input} 
              setInput={setInput} 
              converted={converted} 
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
