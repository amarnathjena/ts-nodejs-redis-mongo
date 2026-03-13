import { Request, Response, NextFunction } from 'express';
export declare const cacheMiddleware: (ttl: number) => (req: Request, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=redisCache.d.ts.map