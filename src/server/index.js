import express from 'express'
import bodyParser from 'body-parser'

const server = express()

server
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended : true }))
    .get('/', (req, res) => 
        res.json({ message : 'test' }))
    .get('/a', (req, res) => 
        res.json({ message : 'a' }))

export default server