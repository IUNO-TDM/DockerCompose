FROM maven:alpine

VOLUME root/.m2
VOLUME root/.Vault

# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY BitcoinVault/pom.xml /usr/src/app

RUN mvn verify clean --fail-never

# Adding source, compile and package into a fat jar
COPY BitcoinVault/src /usr/src/app/src

RUN mvn verify

EXPOSE 8081

CMD mvn jetty:run