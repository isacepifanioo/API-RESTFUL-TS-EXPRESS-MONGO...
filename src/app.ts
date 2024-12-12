import express from "express";
import config from 'config'


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const port = config.get('port')

app.listen(port, () => {
    console.log('Servidor aberto com sucesso');
})