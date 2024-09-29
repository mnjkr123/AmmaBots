import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

// hooks
import { useForgotPassword } from '../../hooks/auth';

// components
import { VerticalForm, FormInput } from '../../components/form';

import AuthLayout from './AuthLayout';

type UserData = {
    email: string;
};

const ForgetPassword = () => {
    const { t } = useTranslation();

    const [resetPasswordSuccess, error, passwordReset, forgotPassword] = useForgotPassword();

    /*
    form validation schema
    */
    const schema: yup.SchemaOf<UserData> = yup.object().shape({
        email: yup.string().required(t('Please enter Email')).email(t('Please enter valid Email')),
    });

    const schemaResolver = yupResolver(schema);

    /*
    handle form submission
    */
    const onSubmit = (formData: UserData) => {
        forgotPassword!({ email: formData.email });
    };

    return (
        <AuthLayout
            bottomLinks={
                <p className="text-muted">
                    {t('Back to')}
                    <Link to="/auth/login" className="text-primary fw-semibold ms-1">
                        {t('Log In')}
                    </Link>
                </p>
            }>
            <h6 className="h5 mb-0 mt-3">{t('Reset Password')}</h6>
            <p className="text-muted mt-1 mb-4">
                {t("Enter your email address and we'll send you an email with instructions to reset your password.")}
            </p>

            {error && !passwordReset && (
                <Alert variant="danger" className="mb-3">
                    {error}
                </Alert>
            )}
            {resetPasswordSuccess && passwordReset && (
                <Alert variant="success" className="mb-3">
                    {resetPasswordSuccess}
                </Alert>
            )}

            <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{}}>
                <FormInput
                    type="email"
                    name="email"
                    label={t('Email')}
                    placeholder={t('Email')}
                    containerClass={'mb-3'}
                />
                <div className="mb-0 text-center pt-3 d-grid">
                    <Button type="submit">{t('Submit')}</Button>
                </div>
            </VerticalForm>
        </AuthLayout>
    );
};

export default ForgetPassword;
