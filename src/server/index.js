import express from 'express'

const server = express()

server
    .get('/', (req, res) => 
        res.json({ message : 'test' }))
    .get('/a', (req, res) => 
        res.json({ message : 'a' }))

export default server