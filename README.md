# Junior to Senior Software Engineer
Udemy's The Complete Junior to Senior Web Developer Roadmap (2020)

## Section 1: Introduction

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

- consider using flexbox and css grid (which are native) instead of dowloading CSS frameworks like Bootstrap or Foundation

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
