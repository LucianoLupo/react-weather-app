For this project i use react, redux, redux-saga, styled-components and react-spring!

you can see the demo [https://react-weather-app-1.netlify.com](here!) ( 'master' branch deployed )

In the 'master' branch, its expose te apiKey for the weather API, and that it's not a good thing so...
In the 'withBackend' branch i made an express server who handle the request and send back the weather data

you can see the demo [https://react-weather-with-backend.appspot.com/](here!) ( 'withBackend branch deployed )


![](demoImages/weather-app.png)


## Available Scripts on 'master' (only front)

In the project directory, you can run:
### `yarn install`

Install all the dependencies needed

and then:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Available Scripts on 'withBackend' (with backend)

In the project directory, you first run:
### `npm install`
Install all the dependencies needed for the server

and then:
### `cd client`
### `npm install`
### `cd..`

Install all the dependencies needed for the frontend

then:

### `npm run dev`
Runs the server with nodemon on localhost:5000.<br />  
Runs the app in the development mode.<br />
Open [http://localhost:3000](localhost:3000) to view it in the browser.