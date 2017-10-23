FROM node:alpine
RUN npm install pm2 -g
RUN apk add --update openssl

# Create app directory

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/db

WORKDIR /usr/src/app

# Bundle app source

COPY CouponServer/ /usr/src/app
COPY config/ /usr/src/app/config/
COPY cert/ /usr/src/app/cert/

# Install app dependencies
RUN npm install


# Set ENV Variables
ENV COUPON_CONFIG config_docker
#ENV NODE_ENV docker

VOLUME /usr/src/db


EXPOSE 3010

CMD [ "pm2-docker", "npm", "--", "start" ]
