import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
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
        expect( dispatch ).toHaveBeenCalledWith(( logout(loginData.errorMessage) ));
        

    });

    test('startLoginWithEmailAndPassword debe de llamar checkingCredentials y Login - Exito', async() => { 

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith(checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith( login(loginData));

    });

    test('startLogout debe de llamar logoutFirebase, clearnotes y logout', async() => { 

        await startLogout()(dispatch);

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );

    });

});