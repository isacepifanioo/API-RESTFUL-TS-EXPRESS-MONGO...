import express from "express";
import config from 'config'

import logger from '../config/logges'
import connect from '../config/db'

import morganMiddleware from "./middleware/morganMiddleware";

import router from "./router";

const app = express()
const port = config.get<number>('port')

app.use(morganMiddleware)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', router)

app.listen(port, () => {
    logger.info('Servidor aberto com sucesso');
    connect()
})