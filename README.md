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

### Hashing
- a form of cryptography used in SSH connections
- e.g., bcrypt to hash passwords
- HMAC or Hash based Message Authentication Code
- HMAC is a recipe for turning hash functions (such as MD5 or SHA256) into MACs. So HMAC-SHA256 is a specific MAC algorithm, just like QuickSort is a specific sorting algorithm.

Steps
1. Diffie-Hellman Key Exchange
2. Arrive at Symmetric Key
3. Make sure of no funny business
4. Authenticate User 
