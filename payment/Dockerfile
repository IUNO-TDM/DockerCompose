FROM maven:alpine

# Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY PaymentService/pom.xml /usr/src/app
RUN mvn dependency:resolve
RUN mvn verify

# Adding source, compile and package into a fat jar
COPY PaymentService/src /usr/src/app/src

RUN mvn clean package jetty:run

EXPOSE 8080