FROM node:boron
RUN npm install pm2 -g


# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source

COPY JuiceMarketplaceWebsite/JuiceMarketplaceWebsite-app /usr/src/app
COPY config/ /usr/src/app/config/

# Install app dependencies
RUN npm install


# Set ENV Variables
ENV TDM_JMW_CONFIG private_config
ENV NODE_ENV testing

EXPOSE 3004

CMD [ "pm2-docker", "npm", "--", "start" ]
