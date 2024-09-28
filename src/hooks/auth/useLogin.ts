// helpers
import { useState } from 'react';
import { login as loginApi } from '../../helpers';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

// Type for user data (adjust fields according to your API response)
interface User {
    email: string;
    token: string;
    // Add other fields as needed
}

export default function useLogin() {
    const api = new APICore();

    const [user, setUser] = useState<User | null>(null); // Initialize with null or appropriate default
    const [error, setError] = useState<string | null>(null);

    const login = async ({ email, password }: { email: string; password: string }) => {
        try {
            const response = await loginApi({ email, password });
            if (response && response.data) {
                const userData = response.data;
                const token = userData.token;

                if (token) {
                    setUser(userData);
                    api.setLoggedInUser(userData);
                    setAuthorization(token);
                } else {
                    throw new Error('Token is missing from login response');
                }
            } else {
                throw new Error('Login failed, no user data received');
            }
        } catch (e) {
            console.error('Login error:', e);
            setError(e instanceof Error ? e.message : 'An error occurred during login');
        }
    };

    return [user, error, login];
}
