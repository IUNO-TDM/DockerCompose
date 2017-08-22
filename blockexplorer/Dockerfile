
# set the base image to Debian
# https://hub.docker.com/_/debian/
FROM node:4.8.4-stretch

# replace shell with bash so

RUN apt-get update \
    && apt-get install -y  python libzmq3-dev libtool pkg-config autoconf automake \
    && apt-get -y autoclean

# confirm installation
RUN npm install -g bitcore-node
RUN cd /root &&  bitcore-node create -t mynode && cd mynode && bitcore-node install insight-api && bitcore-node install insight-ui
EXPOSE 3001 18333
VOLUME /root/mynode/data
WORKDIR /root/mynode
ENTRYPOINT bitcore-node start 
