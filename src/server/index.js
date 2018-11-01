import express from 'express'
import bodyParser from 'body-parser'

import { sign, verify } from './internal/token'

const server = express()

server
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended : true }))
    .get('/', (req, res) => 
        res.json({ message : 'test' }))
    .get('/a', (req, res) => 
        res.json({ message : 'a' }))
    .post('/a', (req, res) => 
        res.json({ message : 'post a', payload : req.body }))
    .post('/sign', (req, res) =>
        res.json({ token : sign(req.body) }))
    .get('/verify/:token', (req, res) =>
        res.json({ payload : verify(req.params.token) }))

export default server