
# Pipedrive and Bling integration api

  

This repository has the integration between Pipedrive and Bling

  

## Installation

  

This project uses `npm` as the package manager. In order to install all

dependencies you just need to run `npm install`.

  

## `npm` scripts

  

This projects uses `npm` scripts to automate some tasks. You can run all the

scripts by doing `npm run <script>` in your terminal.

  

### `npm run build`

  

Builds the application, producing result into `dist` folder.

  

### `npm start`

  

Starts the application, setting `DEBUG` variable to `*` to show all logs.

  

### `npm test`

  

Runs application tests.

  

### `npm run dev`

  

Runs application with [`nodemon`](https://github.com/remy/nodemon/), also,

opens a debugger port that you can connect to.

  

### `npm run format:check`

  

Checks if code is correctly formatted.

  

### `npm run format:write`

  

Applies formatation styles to code.

  

### `npm run lint:check`

  

Checks lint rules

  
### Project layers

#### Application

This layer is responsible to integrate with external resources, which is separted by two sub-layers:
 ##### Facades:
 
> It's responsible to implement the communication by creating methods to get the desired content from the external API

 ##### Service:

> And this layer is responsible to integrate facade layer and domain and parse the data

#### Config
This layer is reponsible to share the project config between all layers

#### DI
This layer is responsible to register all containers by using tsrying, so there will be the tokens and containers

#### Domain
This layer is responsible to estabilsh communication on the "in house" layer, such as a collection or table of the DB side

#### Infrastructure
This layer is responsible to establish the connection with providers as DB or cache providers

#### Middleware
This layer is responsible to authenticate with the desired resource

#### Presentation
And this layer is responsible to present the data by exposing it to routes and its controllers




