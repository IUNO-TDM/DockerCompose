FROM node:boron
RUN npm install pm2 -g


# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source

COPY MarketplaceCore/MarketplaceCore-app /usr/src/app

# Install app dependencies
RUN npm install


# Set ENV Variables
ENV TDM_CORE_CONFIG config_test
ENV NODE_ENV testing

EXPOSE 3002

CMD [ "pm2-docker", "npm", "--", "start" ]