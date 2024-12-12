import express from "express";
import config from 'config'


import connect from '../config/db'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = config.get('port')

app.listen(port, () => {
    console.log('Servidor aberto com sucesso');
    connect()
})