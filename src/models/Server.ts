import colors from 'colors';
import express, { Express } from 'express'
import http from 'http';
import bodyParser from 'body-parser';
import fs from 'fs';
import { createServer } from 'https';
import modulabRouter from '../routes/modulab';

class Servidor {
    private app: Express;
    private server: any;
    public port: number;

    constructor() {
        this.app = express();
        this.port = parseInt( `${ process.env.PORT }` );
        this.server = process.env.ENVIRONMENT == 'productivo'
            ? createServer(
                {
                    cert: fs.readFileSync('/cert/ssaver.gob.mx.crt'),
                    key: fs.readFileSync('/cert/ssaver.gob.mx.key')
                }, this.app
            ) : http.createServer( this.app );
    }

    middlewares() {
        this.app.use( express.json() );
        this.app.use( bodyParser.raw( { type: function(){ return true }, limit: '5mb' } ) );
        this.app.use( '/modulab', modulabRouter );
    }

    execute() {
        this.middlewares();
        this.server.listen( this.port, () => {
            process.env.ENVIRONMENT == 'productivo'
                ? console.log( `Server Settings ready in https://modulab.ssaver.gob.mx:${ this.port }`.america )
                : console.log( `Server Settings ready in http://localhost:${ this.port }`.rainbow );
        } );
    }
}

export default Servidor;