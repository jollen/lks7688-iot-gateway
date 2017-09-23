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
# node index.js
```

All npms were already *bundled* in this project.
