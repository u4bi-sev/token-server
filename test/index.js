import test from 'ava'
import request from 'supertest'

import app from '../src/server'

test('test', t => t.is(1, 1))

test('GET /a', async t => {

    const res = await request(app)
                        .get('/a')

    t.is(res.status, 200)
    t.is(res.body.message, 'a')

})