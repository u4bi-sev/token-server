import jwt from 'jsonwebtoken'

const secret = 'secretKEY_toeknserver@!'

export const sign = payload => jwt.sign(payload, secret)

export const verify = token => jwt.verify(token, secret)