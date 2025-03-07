
# Overview

This project uses empathetic design to improve point-of-sale systems used at Brown University Dining halls.

## PS

### Helpful Notes for Getting React Apps to Deploy to Github Pages

Note, these are modifcations I've made to [this  helpful tutorial](https://github.com/gitname/react-gh-pages?tab=readme-ov-file) about deploying a react-app to github pages. There's other stuff on the internet about configuring routing but this is what I've found to be the most simple/direct of the hings I've tried. 

1. If your repo has directory structure:
   react-app/src/all-your-files
   package.json, package.json should include:
   'name':'react-app' as the first line within the brackets {}

   If your repo has directory structure:
   src/all-your-files
   package.json
   omit the name field as it will in-correctly route you when publishing to github pages causing a blank webpage (but this won't cause any errors when developing locally on localhost with npm run start)

2. You'll also want to add a homepage field to package.json when in order to publish/deploy via github pages. For example, for this repo, that homepage field is: \\
"homepage": "https://selenajwilliams.github.io/dining-hall-POS-story-mapping"\\

For another repo, it would be:\\
"homepage": "https://selenajwilliams.github.io/repo-name"

This provides a route that github pages will look for. 