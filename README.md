# Junior to Senior Software Engineer
Udemy's The Complete Junior to Senior Web Developer Roadmap (2020)

## Section 1: Introduction

- Frontend <--> Backend
![fullstack](/images/fullstack.png)

## Section 2: SSH (Secure Shell)
- also HTTP, HTTPS, FTP protocols (communication rules between machines)
- SSH provides secure encrypted data exchange over a shell

### SSH Command
- `ssh {user}@{host}`
-`ssh root@167.99.146.57`
- digital ocean servers
- connecting to github
- access a remote computer

### How SSH Works
- Symmetrical Encryption
- Asymmetrical Encryption
- Hashing

### Symmetric Encryption
- uses one secret key for both encryption and decryption by both parties
- key exchange algorithm


### Asymmetric Encryption
- one-way relationship
- Difiie Hellman Key Exchange

### Asymmetric Encryption Resources
https://www.youtube.com/watch?v=NmM9HA2MQGI

https://www.youtube.com/watch?v=Yjrfm_oRO0w

https://www.youtube.com/watch?v=vsXMMT2CqqE&t=

https://www.youtube.com/watch?v=NF1pwjL9-DE

### 18. Hashing
- a form of cryptography used in SSH connections
- e.g., bcrypt to hash passwords
- HMAC or Hash based Message Authentication Code
- HMAC is a recipe for turning hash functions (such as MD5 or SHA256) into MACs. So HMAC-SHA256 is a specific MAC algorithm, just like QuickSort is a specific sorting algorithm.

Steps
1. Diffie-Hellman Key Exchange
2. Arrive at Symmetric Key
3. Hashing to make sure of no funny business
4. Authenticate User

### 20. SSH Into a Server
- generate public and private rsa keys
- How to add SSH keys to the `authorized_keys` of a Digital Ocean Server.
- Recommended `ssh-keygen` command:
```ssh-keygen -t rsa -b 4096 -C "youremail@example.com"```

- SSH Video https://youtu.be/ORcvSkgdA58

- Setup SSH on Github https://github.com/antonykidis/Setup-ssh-for-github/blob/master/Setup-ssh-on-github.pdf

### Contribute to Open Source Projects
https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10340674#overview

## Section 3: Performance Part 1

### Three Keys to Performance
1. Front end client side
- critical render path
- optimized code
- progressive web app

2. Transfer - latency
- minimize files
- minimize delivery

3. Back end processing
- CDNs (content delivery networks)
- caching
- load balancing
- DB scaling
- GZIP

### Network Performance
- Honey I shrunk the files
- The traveling deliveryman

Shrinking Files
1. minimize text
2. minimize images

### Image File Formats
1. JPG - complex images with lots of colors (can't do transparency), usually larger file size

2. GIF - 2 to 256 colors, with reduced color counts huge file size savings; great for small animations

3. PNG - limited colors, so smaller size, used for logos, can add transparency to them

4. SVG - vector graphics; can be expanded and keep clarity

5. HEIC - High Efficiency Image Coding, half the size of JPEG

### Image File Formats Resources:

https://99designs.com/blog/tips/image-file-types/

https://pageweight.imgix.com/

https://www.sitepoint.com/gif-png-jpg-which-one-to-use/

### Image Optimizations
Minimize Images
- Transparency: PNG
- Animations: GIF
- Colorful Images: JPG
- Simple icons, logos and illustrations: SVG
- Reduce PNG with TinyPNG
- Reduce JPG with JPEG-optimizer
- Choose simple illustrations over highly detailed photos
- Always lower JPG image quality (30-60%)
- Resize image based on its display size
- Display different sized images for different backgrounds - media queries
- Use CDNs like imigx
- Remove image metadata

jpeg-optimizer.com - didn't work for me
tinypng.com - jpeg and png files
squoosh.app (Google)

### Media Queries - responsive design:
```css
@media screen and (min-width: 900px) {
  body {
    background: url('./large-background.jpg') no-repeat center center-fixed;
    background-size: cover;
  }
}

@media screen and (max-width: 500px) {
  body {
    background: url('./large-background.jpg') no-repeat center center-fixed;
    background-size: cover;
  }
}
```

### Media Query Resources
- view and remove exif online https://www.verexif.com/en/

- Media Queries for standard devices https://css-tricks.com/snippets/css/media-queries-for-standard-devices/

- Media Queries Cheat Sheet https://gist.github.com/bartholomej/8415655

### Delivery Optimizations - The traveling deliveryman deeper dive
- reduce the number of deliveries that have to be made

- consider using flexbox and css grid (which are native) instead of downloading CSS frameworks like Bootstrap or Foundation

- similarly streamline JavaScript; don't add unnecessary libraries

- browsers have a max amount of requests and size of the request that they can make at a time (2-6)

- Max parallel requests per browser https://stackoverflow.com/questions/985431/max-parallel-http-connections-in-a-browser

- Minify your code https://www.minifier.org/

- bundle files into one e.g., https://webpack.js.org/ - a frontend dev tool  

### Critical Render Path Introduction
- DOM: Document Object Model - The DOM is an interface to an HTML document.

- CSSOM: CSS Object Model - The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript.

- Critical Render Path Diagram
![CRP](/images/critical-render-path.png)

### Critical Render Path 1 - HTML
- browser parses data from files and starts creating the DOM
- as the browser encounters an external resource it starts downloading those and CSS and JS files take higher priority and image files take lower priority
- load CSS files as soon as possible in the <head>
- Load <script> JS files as late as possible right before </body>
- JS requires HTML and CSS parsing before it can be run

### Critical Render Path 2 - CSS
- CSS is called render blocking because we have to wait for the CSSOM to combine with the DOM to complete the render tree.

1. Only load whatever is needed.
2. Above the fold loading (from newspapers)
3. Media Attributes
4. Less specificity
```CSS
/* good */
a.important {
  color: pink;
}

/* bad */
.header .nav .item .link a.important {
  color: pink;
}
```

### Critical Render Path 3 - JavaScript
- <script> tag immediately requested from the server

1. Load scripts asynchronously
2. Defer loading of scripts
3. Minimize DOM manipulation
4. Avoid long running JavaScript

JavaScript Loading Diagram
![JSL](/images/JavaScript-Loading-Diagram.png)

`<script>`
- app.js

`<script async>`
- add to anything that doesn't effect the DOM or CSSOM; external scripts that are not essential to the User Experience (UX)
- if core functionality requires JS

`<script defer>`
- executes after HTML has been parsed
- if core functionality does NOT require JS

Async & Defer Resource: https://stackoverflow.com/questions/10808109/script-tag-async-defer

### Tools to Test
- PageSpeed Insights https://developers.google.com/speed/pagespeed/insights/

- WebPageTest https://www.webpagetest.org/

### Performance Tools Resource List Lesson 52
- https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/learn/lecture/10210456#bookmarks
- prefetching https://css-tricks.com/prefetching-preloading-prebrowsing/

### HTTP/2 - improve network latency
- node server code example for http2 server
```JavaScript
const http2 = require('http2');

const server = http2.createSecureServer(options, (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('ok');
});
```
- HTTP/2 https://developers.google.com/web/fundamentals/performance/http2/

### HTTP/3
- https://blog.cloudflare.com/http3-the-past-present-and-future/

"Premature optimization is the root of all evil."

## Section 4: React + Redux + Module Bundling

### State of Frontend Development
- Angular vs React vs Vue

- Which tool is good for the project at hand?

- Angular is a framework: an entire kitchen where everyone works, opinionated with stricter rules

- React is the oven, more flexible than Angular, teaches good JS principles

- Vue is the microwave, simpler and easier to learn

### React
1. Thinking in Components
- e.g., atoms -> molecules -> organisms -> templates -> pages

2. One Way Data Flow - from parent to children

3. Virtual DOM

4. Great React Ecosystem: npm, node, babel, webpack, etc.

### Create React App
- JSX
- Separation of Concerns in React focus on components
- Virtual DOM and making changes in the DOM based only on what changes in the component.
- `class` is a reserved word in JS, so name like this `<div className='f1 tc'>`

- React.Fragment and Semantic HTML http://blog.jmes.tech/react-fragment-and-semantic-html/

- This is really fun. I like doing this.

- State: a description of your app; an object that describes your application; state is able to change. Usually lives in the parent component.

- Props (properties)are just inputs that never change. Props are simply things that come out of state.

- children

- A parent feeds state into a child component and as soon as the child component receives a state it's a property. The child can never change that property.  

One Way Data Flow
![data flow](/images/one-way-data-flow.png)

- JSON Placeholder https://jsonplaceholder.typicode.com/

- Smart Components have state

-lifecycle methods https://reactjs.org/docs/react-component.html

Examples (executed in order)

1. Mounting
- constructor()
- render()
componentDidMount()

2. Updating
- render()
- componentDidUpdate()

3. Unmounting
- componentWillUnmount()

`yarn build` optimizes code for production

### Error Boundary in React

### Introduction to Redux and Webpack
- bottlenecks for JS

### State Management
- can think of state as memory
- state describes how the app should look
- Redux: one massive object that holds state for our entire app and passes props down to the components.
```JavaScript
state = {
  admin: '',
  isSignedInAs: 'user',
  user: 'Mitch'
}
```

### Redux
- Good for managing large state.
- Useful for sharing data between containers.
- Predictable state management using the three principles:

#### The Three Principles of State Management
1. Single source of truth: one big object to take care of state

2. State is read only: immutability of the object that holds state.

3. Changes using pure functions: action -> reducer -> store -> make changes

#### Flux Pattern - one-way data flow
action -> dispatcher -> store (state) -> view

#### MVC - Models, Views, Controllers
action -> controller -> models(s) <--> view(s)

- Architect apps so that as they grow everything is easier to reason about and understand.

- Redux === this.state (of React)

Redux Data Flow
![redux](/images/redux-data-flow.png)

### React + Redux Popular Resources
#### Libraries
- React Router https://reacttraining.com/react-router/web/guides/philosophy
- Ramda: a practical functional library for JS programmers - https://ramdajs.com/
- Lodash: a modern JS utility library delivering modularity, performance & extras https://lodash.com/

#### Styling
- glamorous: maintainable CSS with React https://glamorous.rocks/
- styled components: visual primitives for the component age https://www.styled-components.com/
- CSS Modules: https://github.com/css-modules/css-modules

#### Framework
- Gatsby: framework based on React that helps developers build blazing fast websites and apps https://www.gatsbyjs.org/
- Next.js: for server-side rendering of apps https://nextjs.org/

#### Reusable Components
- Material-UI: react components for faster and easier web development https://material-ui.com/
- Semantic UI: Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML. https://semantic-ui.com/

#### Tools
- Reselect: Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater. https://github.com/reduxjs/reselect
- Redux-Saga: is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures. https://redux-saga.js.org/
- immutable-js: Immutable persistent data collections for Javascript which increase efficiency and simplicity. https://github.com/immutable-js/immutable-js

### Module Bundlers: remember that these always change
- webpack: bigger projects https://webpack.js.org/
- parcel: small project without the need for configuration https://parceljs.org/
- rollup.js: when rolling out own npm packages https://rollupjs.org/guide/en/


### webpack
- bundles your assets: modules with dependencies -> static assets

### Babel is a JavaScript compiler https://babeljs.io/

### Resources: Webpack 4 Configurator
Configuration shouldn't be hard. As time goes one, I believe we will move towards less and less configuration. Here is a great tool to make configuring your Webpack easy. Enjoy playing with it! http://web.jakoblind.no/webpack-config/

### ESLint
- ESLint: find and fix problems in your JavaScript code https://eslint.org/

### Parcel

## Section 5: Performance Part 2
- Think critically about how our programs work.
- What solution is best and what will have the longest lasting value.

### Code Optimization
- keep your JavaScript parse and compile times low

### Code Splitting
- How can we ship the least amount of JavaScript to the user.
- route based chunking (good way to do this and used more often) https://reactjs.org/docs/code-splitting.html
- component based chunking (e.g., very large homepage) https://jamie.build/react-loadable.html
- react-loadable was the recommended way for React code splitting for a long time. However, today it is not maintained any more and it is not compatible with Webpack v4+ and Babel v7+. If you use it, it is recommended to migrate to React.lazy or @loadable/component.
- `React.lazy` https://loadable-components.com/docs/loadable-vs-react-lazy/

### React Performance Optimizations
- React Developer Tools in Chrome (Highlight Updates)
- To view performance metrics for your react app:
Append `?react_perf` to your local server URL (e.g. `localhost:3000/?react_perf`) and visit that URL in a browser.

### React Performance Optimizations 2
- Shallow comparison
```JavaScript
shouldComponentUpdate(nextProps, nextState) {
  if (this.state.count !== nextState.count) {
    return true;
  }
  return false;
}

import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  ```
- Why did you update https://www.npmjs.com/package/why-did-you-update

Resources: React Performance 2
To get familiar with the asynchronous nature of setState(), have a look at:

https://medium.com/@wereHamster/beware-react-setstate-is-asynchronous-ce87ef1a9cf3

https://vasanthk.gitbooks.io/react-bits/patterns/19.async-nature-of-setState.html

Finally, have a look at this tool mentioned in the previous video:

Why did you update? https://github.com/maicki/why-did-you-update

### Optimizing Code Review
1. Only load what's needed:
- Code Splitting
- Tree Shaking: removes any unused code (webpack)
https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/

2. Avoid blocking main thread

3. Avoid Memory Leaks - avoid adding memory into our apps like unused event listeners

4. Avoid multiple re-rendering
- minimize the number of DOM manipulations

### Progressive Web Apps
- Native (mobile) apps are designed to work offline
- Progressive web apps: made to be more like native apps
- https://whatwebcando.today/
- React Native for mobile apps
- already built-in to create react-app
- lighthouse chrome extension

### Progressive Web App Resources
- "I built a PWA and published it in 3 app stores. Here's what I learned." http://debuggerdotbreak.judahgabriel.com/2018/04/13/i-built-a-pwa-and-published-it-in-3-app-stores-heres-what-i-learned/

- Progressive Web Apps on iOS are here https://medium.com/@firt/progressive-web-apps-on-ios-are-here-d00430dee3a7

- Appscope https://appsco.pe/

### PWA
- HTTPS
- App Manifest
- Service Workers

### PWA - HTTPS
- PWA checklist https://developers.google.com/web/progressive-web-apps/checklist
- Let's Encrypt is a free, automated, and open Certificate Authority https://letsencrypt.org/
- Cloudflare https://www.cloudflare.com/

### PWA - App Manifest
- `manifest.json`
- Viewport Meta Tag https://developers.google.com/web/tools/lighthouse/audits/has-viewport-meta-tag
- Favicon Generator https://realfavicongenerator.net/
- load a splash screen and icon instead of a white screen

### PWA - Service Workers
- a script that your browser runs in the background separate from the webpage web app.
- another worker that you have in the browser working in the background as a programmable proxy that allows use offline
- isServiceWorkerready? https://jakearchibald.github.io/isserviceworkerready/

Service Worker Data Flow
![service-worker](/images/service-worker.png)

- Add service worker into an existing create react app https://github.com/jeffposnick/create-react-pwa/compare/starting-point...pwa

### Accessibility
- https://www.w3.org/standards/webdesign/accessibility

### Tools to improve front end performance: https://progressivetooling.com/

## Section 6: Testing
- A method in software development where individual units of source code, assets, or programs are tested to see whether they work properly.
- another file in your project that runs in developmen only and not in production.
- TDD Test Driven Development: writing tests even before you actually write your code so that you write code based on the tests that you provide.

### Types of Tests
1. Unit Tests
2. Integration Tests
3. Automation Tests

#### Unit Tests
- most common and easiest to implement
- work on these kinds of tests 90% of the time
- tests individual functions or classes
- important to have in your application

#### Integration Tests
- how different pieces of code work together.
- e.g., whether the database works with the express app.

#### Automation Tests or UI Tests
- testing real life scenarios on the browser

### Testing Libraries
![testing-libraries](/images/testing-libraries.png)

- the scaffolding giving us the ability to use some function calls and some new methods to actually write our tests.

#### Top Three Libraries: npm install libraries
1. Jasmine
2. Jest
3. Mocha

#### Assertion Library: to test that the variables contain the expected value.
1. Jasmine - comes with its own asssertion library
2. Jest - also comes with its own assertion library
3. Chai which pairs with Mocha (BDD - Behavioral Driven Development) - https://www.chaijs.com/

#### Test Runner - allows us to run our tests
1. Jasmine includes test runner
2. Jest also includes test runner
3. Mocha has a test runner
4. Karma another test runner allows testing on the browser

- Puppeteer: a headless browser; a node library which provides high level API to control the headless version of the browser

-jsdom {;} a fake JavaScript version of the DOM

#### Mocks, Spies and Stubs
1. Jasmine comes with this
2. Jest comes with this
3. Sinon.js works with Mocha https://sinonjs.org/

-  Spies provide information about functions: how many times they were called, in what cases, and by whom.
- Stubs replace certain functions with a function to ensure that the expected behavior happens.
- Mocks fake a function or a behavior to test differentr parts of a process. Good for integration tests.

#### Code Coverage
- Istanbul library: gives a report of where tests have been implemented and where tests are missing.

#### Top 5 JavaScript Testing Frameworks
- https://www.browserstack.com/guide/top-javascript-testing-frameworks
1. Mocha
2. Jest (from facebook)
3. Jasmine
4. Karma
5. Puppeteer (Google)

#### Unique React Tools
- Snapshot from Jest
- Enzyme (Airbnb)

### Unit Tests
- cover all small pure functions of an application
- good to have small pure functions that take an input and return an output and do one thing really really well
- main principle of functional programming.
- one of the biggest benefits of functional programming versus object-oriented programming
- a pure function is a function that has no side effects like affecting another part of a program; deterministic
- most React components are mostly pure functions
- don't test the contract: the contract is the connection between things.

### Integration Tests
- all about cross communication between different units of code
- Integration tests as connecting components to see how they work together.
- More expensive, slower, take longer to write and have a lot of moving parts.

### Automation Tests (aka end to end testing)
- UI tests to simulate user behavior and make sure these scenarios actually work from the ponit of view of an end user.
- hard to implement
- sample list of services: Nightmare, TestCafe, webdriver, Cypress

### Testing Development
![testing-development](/images/testing-development.png)
