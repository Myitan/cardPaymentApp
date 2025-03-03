FROM maven:3.8.6-eclipse-temurin-17-alpine AS build
WORKDIR /app
# Copy ONLY backend files
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]