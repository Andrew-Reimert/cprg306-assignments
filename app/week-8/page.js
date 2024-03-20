"use client";

import { useUserAuth } from "./_utils/auth-context";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    return (
        <div>
            <h1>Week 8</h1>
            <p>{user ? "Welcome" : "Sign In Please" }</p>
            {user && user.displayName}
            <p>
                {user ? (
                    <button onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign In with GitHub</button>
                )}
            </p>
        </div>
    );
    
    

}