import { Response } from 'express';

export const testingEndPoint = ( req: any, res: Response ) => {
    try {
        res.status( 200 ).json({
            ok: true,
            msg: 'Ok'
        });
    }
    catch( err ) {
        res.status( 500 ).json({
            ok: false,
            msg: 'Contacta al devops'
        });
    }
}