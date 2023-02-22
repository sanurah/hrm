FROM amazoncorretto:17-alpine AS hrm-app
RUN addgroup -S hrm && adduser -S hrm -G hrm
USER hrm:hrm
ARG JAR_FILE=./target/app-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]