import express from 'express';
import cors from 'cors';
import {dotenvConfig} from './config/config.js'
import {mongoConnection} from './connection/mongodb.js';

import router from './routes/router.js'

const server = express();
dotenvConfig()
const port = process.env.PORT

server.use('/api', router);

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
await mongoConnection()
server.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server running at http://localhost:${port}`)
})