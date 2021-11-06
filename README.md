# A siple Markdown Previewer
Its a quick and dirty finished FreeCodeCamp-Project. I focussed on the Code rather than style. It wasn't my favourite project, but I learned a lot. 

## What I learned
I learned to solve tasks taking hours for implementing all on my own by using libraries and therefore saving time in the development process. The carefull reading of the Documentation resultet in me wanting to implement some HTMLsanitization as well. 

Sanitization was made with DOMPurify, but the FCC-Testsuite didn't accept the sanitized HTML (some element attributes where swapped in their declaration order and causing and error in the automated test, which expected the marked-libraries declaration order).

So I decided to exclude the sanitization until the tests are passed and the certificate is made and bring it back in. No user should be able to insert Markdown/HTML without sanitization.

## Where I will use it
Despite me not willing to continue improving this project any further, it has been very usefull for the ProjectBar-Component, you will find in every FCC-Project of mine (on the left). There I used the marked and DOMPurify libraries for an Popover, showing the projects README.md file without needing the users to leave my project pages.

## Project-URL:
You can find the project in the wild on my [webpage](https://do-webdev.de/), which might be under construction. 
But the Project is already reachable: [https://do-webdev.de/projects/markdown/](https://do-webdev.de/projects/markdown/).