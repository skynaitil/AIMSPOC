'use strict'

import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

// env variables
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL|| 'mongodb://localhost/aimspoc';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);

app.use(bodyParser.json.cors())

app.use(require('../route/auth-router'));

app.all('*', (request, response) =>{
    console.log('Returning a 404 from the catch-all route');
    return response.sendStatus(404);
});

// Error Middleware
app.use(require('./error-middleware'));

export const start = () => {
    app.listen(PORT, () =>{
        console.log('listening on port: ${PORT}')
    })
}

export const stop = () => {
    app.close(PORT, () => {
        console.log('Shut down on port: ${PORT}')
    })
}