
<p align="center">
    A <a href="https://nodejs.org/en/">Node.js</a> based, dockerized spaicer example container.
</p>



## Install

### Prerequisits
You need to install <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04">docker</a> and <a href="">docker-compose</a> for the system to work. **Dont forget to set the docker command to work withou sudo.**

### Build and Run docs and srs container

```sh
docker-compose up
```


### Build and Run single containers using Docker
Build the container by 
```
docker build -t spaicer-example-container . 
```
Run the container 
```
docker run -dp 3001:3001 spaicer-example-container
```

### Development 

Install dependencies by 
```sh
npm install
```
and start the application by 

```sh
npm run start
```

### Build the docs 
Install dependencies by 
```sh
npm install
```
and run the docs
```sh
npm run docs
```
