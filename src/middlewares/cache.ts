import {Request, Response, NextFunction} from 'express'
import Redis from 'ioredis'

const redis:Redis = new Redis()


const cache = async(req:Request, res:Response, next:NextFunction){
    const { id } = req.params;

    redis.get(id, (err:any, result:any)=>{
        if(err) throw err
        if(!result){
            return next()
        }
        return res.json(JSON.parse(result))
    })
}

export {cache}