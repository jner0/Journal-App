import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('pruebas en AuthThunks', () => { 
    const dispatch = jest.fn();

    beforeEach(() => jest.clearAllMocks());

    test('debe de invocar el checkingCredentials', async() => { 

        await checkingAuthentication()(dispatch);
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());


    });

    test('startGoolgeSingIn debe de llamar checkIn credentials y logIn', async() => { 

        const loginData = { ok: true,  ...demoUser};
        await singInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials());
         expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

    });

    test('startGoolgeSingIn debe de llamar checkingCredentials y logout - Error', async() => { 

        const loginData = { ok: false,  errorMessage: 'Un error en Google'};
        await singInWithGoogle.mockResolvedValue( loginData );

        //thunk
        await startGoogleSignIn()(dispatch);
        
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials( logout ));
        

    });

});