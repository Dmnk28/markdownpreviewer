import React, { useState } from 'react';
import { Box } from '@mui/system';
import marked from 'marked';

import './styles/main.css';

import Editor from './components/_editor';
import Preview from './components/_preview';

import ProjectBar from './components/ProjectBar/ProjectBar'

const App = () => {

  const defaultInput = `# A siple Markdown Previewer
Its a quick and dirty finished FreeCodeCamp-Project. I focussed on the Code rather than style. It wasn't my favourite project, but I learned a lot. 
  
## What I learned
I learned to solve tasks taking hours for implementing all on my own by using libraries and therefore saving time in the development process. 

The carefull reading of the [marked](https://marked.js.org/) Documentation resultet in me wanting to implement some HTMLsanitization as well. 
  
Sanitization was made with DOMPurify, but the FCC-Testsuite didn't accept the sanitized HTML (some element attributes where swapped in their declaration order and causing and error in the automated test, which expected the marked-libraries declaration order).
  
So I decided to exclude the sanitization until the tests are passed and the certificate is made and bring it back in. No user should be able to insert Markdown/HTML without sanitization.
  
## Where I will use it
Despite me not willing to continue improving this project any further, it has been very usefull for the ProjectBar-Component, you will find in every FCC-Project of mine (on the left). There I used the marked and DOMPurify libraries for an Popover, showing the projects README.md file without needing the users to leave my project pages.

### Items to pass this Test:
the \`<html>Code is here</html>\` in Text 
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

1. Ollist
1. second Item

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [input, setInput] = useState(defaultInput);
  const [converted, setConverted] = useState(marked(defaultInput));

  return (
    <div>
    <ProjectBar 
          title       =   'Build a Markdown Previewer'
          institute   =   'FreeCodeCamp'
          instURL     =   'https://www.freecodecamp.org/'
          course      =   'Front End Development Libraries Certification'
          courseURL   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/'
          userStory   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer'
          repository  =   'https://github.com/Dmnk28/markdownpreviewer'
          readme      =   'https://github.com/Dmnk28/markdownpreviewer/blob/main/README.md'
          next        =   'https://do-webdev.de/projects/drums'
          previous    =   'https://do-webdev.de/projects/poems'
      />
    <div className="App">
      <div>
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
    </div>
    </div>
  );
}

export default App;
