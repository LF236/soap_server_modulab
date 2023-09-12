import fs from 'fs';
import path from 'path';
let dir_xml_files = path.join( __dirname, '../../wsdl' );
const poServiceXml = fs.readFileSync( path.join( dir_xml_files, 'helloTesting.wsdl' ), 'utf-8' );

const poService = {
    MessageSplitterService: {
		MessageSplitterServiceSoapPort: {
			MessageSplitter: function (args: any) {
                const name = args.message;
                console.log( args );
                return {
                    result: `Hello ${ name }`
                }
            }
		},
		MessageSplitterServiceSoap12Port: {
			MessageSplitter: function ( args: any ) {
                const name = args.message;
                return {
                    result: `Hello ${ name }`
                }
            }
		}
	}
}

export default {
    xml: poServiceXml,
    service: poService
}