import fs from 'fs';
import path from 'path';
import { base64_decode } from '../helpers/saveFile';
let dir_xml_files = path.join( __dirname, '../../wsdl' );
const poServiceXml = fs.readFileSync( path.join( dir_xml_files, 'saveLabs.wsdl' ), 'utf-8' );

const saveLabsService = {
    SaveLabsService: {
		SaveLabsServiceSoapPort: {
			SaveLabs: function (args: any) {
                try {
                    const { image, id_paciente, extension } = args;
                    base64_decode( image, extension );
                    console.log( args );
                    return {
                        result: `Hello`
                    }
                }
                catch( err ) {
                    return {
                        result: `Error contacte con el Devops`
                    }
                }
            }
		},
		SaveLabsServiceSoap12Port: {
			SaveLabs: function ( args: any ) {
                try {
                    const { image, id_paciente, extension } = args;
                    base64_decode( image, extension );
                    console.log( args );
                    return {
                        result: `Hello`
                    }
                }
                catch( err ) {
                    return {
                        result: `Error contacte con el Devops`
                    }
                }
            }
		}
	}
}

export default {
    xml: poServiceXml,
    service: saveLabsService
}