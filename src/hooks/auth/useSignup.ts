import { useState } from 'react';

// helpers
import { signup as signupApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

export default function useSignup() {
    const api = new APICore();

    const [user, setUser] = useState<any>(); // You may replace `any` with a more specific user type
    const [error, setError] = useState<string | null>(null); // Define error state as string or null

    const signup = async ({ fullname, email, password }: { fullname: string; email: string; password: string }) => {
        try {
            const response = await signupApi({ fullname, email, password });
            setUser(response.data);
            api.setLoggedInUser(response.data);
            setAuthorization(response.data['token']);

            // Store the email in sessionStorage if in a browser environment
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('signupEmail', email);
                console.log('Stored email in sessionStorage:', email); // Debug log
            }
        } catch (e) {
            // Type the caught error
            const errorMessage = (e as Error).message || 'An unknown error occurred';
            setError(errorMessage); // Set the error state with the error message
        }
    };

    return { signup, user, error };
}
