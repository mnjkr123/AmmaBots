import { useState } from 'react';

// helpers
import { forgotPassword as forgotPasswordApi } from '../../helpers';

export default function useForgotPassword(): [string, string, boolean, (email: string) => void] {
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState('');
    const [error, setError] = useState('');
    const [passwordReset, setPasswordReset] = useState(false);

    const forgotPassword = (email: string) => {
        // Ensure the email is used here
        const response = forgotPasswordApi({ email }); // This line uses the email parameter
        response
            .then((response) => {
                setResetPasswordSuccess(response.data.message);
                setPasswordReset(true);
            })
            .catch((e) => {
                setError(e);
                setPasswordReset(false);
            });
    };

    return [resetPasswordSuccess, error, passwordReset, forgotPassword];
}
