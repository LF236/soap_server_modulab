import fs from 'fs';
import path from 'path';
export const base64_decode = ( base64: string, extension: string ) => {
    const bitMap = new Buffer( base64, 'base64' );
    const ruta = path.join( __dirname, '../../files' );
    fs.writeFileSync( `${ruta}/${ new Date() }.${ extension }`, bitMap );
}