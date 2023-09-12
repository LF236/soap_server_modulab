import fs from 'fs';
import path from 'path';
let dir_xml_files = path.join( __dirname, '../../wsdl' );
const poServiceXml = fs.readFileSync( path.join( dir_xml_files, 'saveLabs.wsdl' ), 'utf-8' );

const saveLabsService = {
    SaveLabsService: {
		SaveLabsServiceSoapPort: {
			SaveLabs: function (args: any) {
                console.log( args );
                return {
                    result: `Hello`
                }
            }
		},
		SaveLabsServiceSoap12Port: {
			SaveLabs: function ( args: any ) {
                return {
                    result: `Hello`
                }
            }
		}
	}
}

export default {
    xml: poServiceXml,
    service: saveLabsService
}