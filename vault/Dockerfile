FROM maven:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Prepare by downloading dependencies
COPY BitcoinVault/pom.xml /usr/src/app
RUN mvn dependency:resolve
RUN mvn verify

# Adding source, compile and package into a fat jar
COPY BitcoinVault/src /usr/src/app/src

RUN mvn clean package jetty:run

EXPOSE 8081