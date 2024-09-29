import { useState } from 'react';

// helpers
import { forgotPassword as forgotPasswordApi } from '../../helpers';

export default function useForgotPassword(): [string, string, boolean, (email: string) => Promise<void>] {
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [passwordReset, setPasswordReset] = useState<boolean>(false);

    const forgotPassword = async (email: string) => {
        try {
            const response = await forgotPasswordApi({ email }); // Now using await for clarity
            setResetPasswordSuccess(response.data.message);
            setPasswordReset(true);
        } catch (e) {
            setError(e.message || 'An error occurred');
            setPasswordReset(false);
        }
    };

    return [resetPasswordSuccess, error, passwordReset, forgotPassword];
}
