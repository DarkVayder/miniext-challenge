import { getAuth } from 'firebase/auth';
import { app } from './firebase';

export const firebaseAuth = getAuth(app);

/* Uncomment and use this if you want to connect to the Firebase Auth Emulator in development
if (isDev) {
    connectAuthEmulator(firebaseAuth, 'http://127.0.0.1:9099', {
        disableWarnings: true,
    });
}
*/
