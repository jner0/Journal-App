import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dvvhz9wti',
    api_key: '867998173799672',
    api_secret: 'vV01LOb6V6VgdfRuEeaQn3fcGu0',
    secure: true
})

describe('Pruebas en File Upload', () => { 

    test('debe de subir el archivo correctamente a Cloudinary', async() => { 

        const imageUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length -1 ].replace('.png', '');
        // console.log({imageId})

        const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId ], {
            resource_type: 'image'
        });

    });

    test('debe de retornar Null', async() => { 
        const file = new File([], 'foto.jpg');

        const url = await fileUpload( file );
        expect( url ).toBe(null);

    });

});