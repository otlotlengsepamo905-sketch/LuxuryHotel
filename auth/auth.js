import { auth, db } from '../config';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail 
} from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js';
import { 
    doc, 
    setDoc, 
    serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js';

/**
 * Creates a new user profile using Firebase Authentication and stores user details in Firestore.
 */
export async function signUp(email, password, name) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save custom user profile data into Firestore
        await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: email,
            name: name,
            createdAt: serverTimestamp()
        });

        return user;
    } catch (error) {
        console.error("Sign up error:", error.message);
        throw error;
    }
}

/**
 * Authenticates an existing user profile using email and password.
 */
export async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Sign in error:", error.message);
        throw error;
    }
}

/**
 * Sends a password reset email linkage to the provided email address.
 */
export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent successfully!");
    } catch (error) {
        console.error("Password reset error:", error.message);
        throw error;
    }
}

