FROM maven:alpine

# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY BitcoinVault/pom.xml /usr/src/app
#RUN mvn dependency:resolve
#RUN mvn verify

# Adding source, compile and package into a fat jar
COPY BitcoinVault/src /usr/src/app/src

RUN mvn clean package

EXPOSE 8081

CMD mvn jetty:run

#TODO: Make wallet files accessable via a volume