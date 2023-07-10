const express = require('express');
const app = express();
const server = require('./apollo-server/server');

const PORT = 4000;

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}/graphql`);
    });
}

startServer();
