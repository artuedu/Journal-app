import '@testing-library/jest-dom';
import cloudinary from 'cloudinary'

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'artuedu', 
    api_key: '274771788332347', 
    api_secret: 'q0nRHEIYgCab5_BeWIYiKuHmK6o' 
});

describe('Pruebas en fileUpload', () => {
    
    test('Debe de cargar una archivo y retornar un url', async(done) => {
        
        const resp = await fetch('https://static.wixstatic.com/media/2cd43b_2fbcdebf10894ccdbbd22f5642338f6c~mv2.png/v1/fill/w_256,h_256,fp_0.50_0.50/2cd43b_2fbcdebf10894ccdbbd22f5642338f6c~mv2.png');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        //Borrar imagen por ID
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });

    });

    test('Debe de retornar un error', async() => {
        
        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);

    });
    
});
