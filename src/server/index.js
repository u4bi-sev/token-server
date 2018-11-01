import express from 'express'

const server = express()

server
    .get('/', (req, res) => 
        res.json({ message : 'test' }))

export default server