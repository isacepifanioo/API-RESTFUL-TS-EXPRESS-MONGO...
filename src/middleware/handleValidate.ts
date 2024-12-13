import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export function handlevalidate(req: Request, res: Response, next: NextFunction) {
    const error = validationResult(req)

    if(error.isEmpty()) {
        next()
        return
    }

    const ObjError: object[] = []

    error.array().map(val => ObjError.push({[val.type]: val.msg}))
    res.status(422).json({
        message: ObjError
    })
    return
}