# Lov-n-serv

The API is accessible at `https://lovngo.herokuapp.com/`

## Server Side

Run `npm install` to install all the dependencies.

Run `npm start` to run the NodeJS Server.

The API will listen to `http://localhost:3000/`

### Tests

![alt text](https://github.com/NicolasBighetti/Lov-n-serv/blob/master/resources/tests-console.png)

You can run the application tests by typing `npm test`

Once you have run the tests at least once, you can access an HTML report in the folder `coverage/index.html`. You can also access the coverage while the API is running at `http://localhost:3000/coverage/` or directly at `https://lovngo.herokuapp.com/`

![alt text](https://github.com/NicolasBighetti/Lov-n-serv/blob/master/resources/lovers_test.png)

## API doc

![alt text](https://github.com/NicolasBighetti/Lov-n-serv/blob/master/resources/lovers_dock.png)

The API documentation is accessible here => `http://localhost:3000/api-docs`or `https://lovngo.herokuapp.com/api-docs/`

## Docker

To create the docker image, just run the `dockerSetup.sh` file. Then, run the `dockerRun.sh` file. The Docker container is now running locally on port 8080 (provided that you installed docker first)

![alt text](https://github.com/NicolasBighetti/Lov-n-serv/blob/master/resources/docker_run.png)

You can now deploy your container on a server and you'll be set!

### Database Setup

The database is running remotely at `mongodb://ds133558.mlab.com:33558/lovngo`. Password is provided in this github but really should stay secret.

You can easily host a mongo db at `https://mlab.com/`
