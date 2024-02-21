import jwt from 'jsonwebtoken'
import { responseApi } from './response.js'

export const jwtoken = {
    createJwtToken: (data) =>
        jwt.sign(data,'SECRET_KEY',{algorithm: 'HS256',expiresIn: '24h'})
    ,

    createRefreshToken: (data) =>
        jwt.sign(data,'SECRET_KEY_2',{algorithm: 'HS256',expiresIn: '7d'})
    ,

    checkToken: (data) =>
        jwt.verify(data,'SECRET_KEY', (err,decode) => err)
    ,

    checkRefreshToken: (data) =>
        jwt.verify(data,'SECRET_KEY_2', (err,decode) => err)
    ,

    decodeToken: (data) =>
        jwt.decode(data)
    ,

    verifyToken: (req,res,next) =>{
        let {token} = req.headers;

        let checkTokenHeader = jwtoken.checkToken(token)
        checkTokenHeader === null ? next() : responseApi(res,401,'',checkTokenHeader)
    }
}