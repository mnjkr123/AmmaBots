import { Link, Navigate } from 'react-router-dom';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import FeatherIcon from 'feather-icons-react';
import { useState } from 'react';
import { supabase } from '../../helpers/supabaseClient'; // Ensure the path is correct
import { VerticalForm, FormInput } from '../../components/form';
import AuthLayout from './AuthLayout';
import { toast } from 'react-toastify'; // For notifications

// Adjusted UserData type
type UserData = {
    exampleName: string;
    email: string;
    password: string;
};

// Adjusted Yup schema to properly validate UserData
const schemaResolver = yupResolver(
    yup.object({
        exampleName: yup.string().required('Please enter Name'),
        email: yup.string().email('Please enter a valid Email').required('Please enter Email'),
        password: yup.string().required('Please enter Password'),
    })
);

const SignUp = () => {
    const { t } = useTranslation();
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = async (formData: UserData) => {
        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);

        try {
            const { data, error: signupError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (signupError) throw signupError;

            const user = data?.user;

            if (user?.id) {
                const { error: profileError } = await supabase.from('profiles').upsert([
                    {
                        id: user.id,
                        username: formData.exampleName,
                        email: formData.email,
                    },
                ]);

                if (profileError) {
                    console.error('Error inserting/updating profile:', profileError);
                    setError(`Profile Error: ${profileError.message}`);
                }
            } else {
                console.warn('User ID is not available immediately after signup. Skipping profile update.');
            }

            sessionStorage.setItem('signupEmail', formData.email);
            toast.success('Please check your email for verification.');
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error during registration:', error);
            setError(`Error: ${(error as Error).message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {formSubmitted && <Navigate to="/auth/confirm" replace />}
            <AuthLayout
                hasSlider
                bottomLinks={
                    <p className="text-muted">
                        {t('Already have an account?')}
                        <Link to="/auth/login" className="text-primary fw-semibold ms-1">
                            {t('Log In')}
                        </Link>
                    </p>
                }>
                <h6 className="h5 mb-0 mt-3">{t('Create Your Account')}</h6>
                <p className="text-muted mt-1 mb-4">
                    {t("Don't have an account? Create your account, it takes less than a minute.")}
                </p>

                {error && (
                    <Alert variant="danger" className="mb-3">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{}}>
                    <FormInput
                        type="text"
                        name="exampleName"
                        label={t('Your Name')}
                        placeholder={t('Your Name')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        label={t('Email')}
                        placeholder={t('Email')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        placeholder={t('Enter your password')}
                        containerClass={'mb-3'}
                    />
                    <div className="mb-0 text-center d-grid">
                        <Button type="submit" disabled={isSubmitting}>
                            {t('Register')}
                        </Button>
                    </div>
                </VerticalForm>

                <div className="py-3 text-center">
                    <span className="fs-13 fw-bold">{t('OR')}</span>
                </div>
                <Row>
                    <Col xs={12} className="text-center">
                        <Link to="#" className="btn btn-white w-100">
                            <FeatherIcon icon="github" className="icon icon-xs me-2" />
                            {t('Sign Up with Github')}
                        </Link>
                    </Col>
                </Row>
            </AuthLayout>
        </>
    );
};

export default SignUp;
