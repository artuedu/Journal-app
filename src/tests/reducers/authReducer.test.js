import '@testing-library/jest-dom';
import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
    
    test('Debe de realizar al login', () => {
        
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Arturo'
            }
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'abc',
            name: 'Arturo'
        });

    });

    test('Debe de realizar al logout', () => {
        
        const initState = {
            uid: 'sdasflkmfa',
            name: 'Arturo'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});

    });

    test('No debe de hacer cambios en el state', () => {
        
        const initState = {
            uid: 'sdasflkmfa',
            name: 'Arturo'
        };

        const action = {
            type: 'sadjda',
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);

    });
    
});
