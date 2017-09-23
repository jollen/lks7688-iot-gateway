![](https://travis-ci.org/jollen/lks7688-iot-gateway.svg?branch=master)

# Quick Start

SSH to LinkIt Smart 7688:

```
$ ssh root@mylinkit.local
```

Download ```lks7688-iot-gateway``` and start the websocket broker server:

```
# git clone --depth 1 https://github.com/jollen/lks7688-iot-gateway.git
# export HOST=<YOUR-7688-IP-ADDRESS>
# node --harmony index.js
```

## Notice

* You dont have to ```npm install``` since all npms were already *bundled* (pre-donwloaded) in the project.
* You have to run Node.js in the harmony mode since LinkIt Smart 7688 has and only has Node.js 0.12.
