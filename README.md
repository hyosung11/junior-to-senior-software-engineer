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

### Image File Formats Resources:

https://99designs.com/blog/tips/image-file-types/

https://pageweight.imgix.com/

https://www.sitepoint.com/gif-png-jpg-which-one-to-use/

### Image Optimizations
