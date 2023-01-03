import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end()
    }

    const [, token] = authToken.split(" ");

    try {

        const { sub } = verify(
            token, 
            process.env.JWT_SECRET
        ) as Payload;

        return next();
        
    } catch (error) {
        return res.status(401).end();
    }
}