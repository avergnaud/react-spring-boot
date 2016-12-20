# build from src/main/resources/front-resources to react-spring-boot/src/main/resources/static
./node_modules/.bin/webpack -d --watch --display-error-details &

# build and run the app
mvn spring-boot:run
