"use client";
import React, { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";


export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [loading, setLoading] = useState(false);

    const handleGitHubSignIn = async () => {
        setLoading(true);
        try {
            await gitHubSignIn();
            setLoading(false);
        } catch (error) {
            console.error("error signing in with GitHub: ", error);
            setLoading(false);
        }
    }

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("error signing out: ", error);
        }
    };
            

    return (
        <div>
            <h1 className="text-4xl font-bold mb-5">Week 10 Shopping List</h1>
            {user ? (
                <div>
                    <p>Sign in as {user.displayName} ({user.email})</p>
                    <p>
                    <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</button>
                    </p>
                    <a className="text-lg hover:underline" href="/week-10/shopping-list" user={user}>Shopping List</a>
                </div>
            ) : (
            <div>
                <button onClick={handleGitHubSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {loading ? "Signing in..." : "Sign in with GitHub"}
                </button>
            </div>
            )}
        </div>
    );
}