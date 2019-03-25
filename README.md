# React-Express-Simple-Start

Based on [simple-react-fullstack](https://webpack.js.org/configuration/dev-server/) but adapted for my own personal use, this is a dead simple boilerplate for spinning up full applications using React, Node.js, Express and Webpack quickly.

### Development mode

In the development mode, we will have 2 servers running. The front end code will be served by the [webpack dev server](https://webpack.js.org/configuration/dev-server/) which helps with hot and live reloading. The server side Express code will be served by a node server using [nodemon](https://nodemon.io/) which helps in automatically restarting the server whenever server side code changes.

### Production mode

In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
or npm start
```

## Documentation

Please see the [simple-react-fullstack](https://webpack.js.org/configuration/dev-server/) repository.