import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import FeatherIcon from 'feather-icons-react';
import { supabase } from '../../helpers/supabaseClient';
import { VerticalForm, FormInput } from '../../components/form';
import AuthLayout from './AuthLayout';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';

// Define the User type
interface User {
    id: string;
    email: string;
    name?: string; // Optional
    role?: string; // Optional
}

const api = new APICore();

// Validation schema for form inputs using zod
const schema = z.object({
    email: z.string().email('Please enter a valid email').nonempty('Email is required'),
    password: z.string().nonempty('Password is required'),
});

// Define the UserData type
interface UserData {
    id: string;
    email: string;
    name: string; // Add this line if it doesn't exist
    password: string;
    remember?: boolean; // Optional remember field
}

const Login = (): React.ReactElement => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
    } = useForm<UserData>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<UserData> = async (data) => {
        try {
            const {
                data: { session, user },
                error,
            } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });

            if (error) {
                console.error('Login error:', error.message);
                return;
            }

            if (session) {
                const accessToken = session.access_token;

                const typedUser = user as User;

                if (typedUser.name) {
                    api.setLoggedInUser({
                        id: typedUser.id,
                        name: typedUser.name,
                        email: data.email,
                        token: accessToken,
                        role: typedUser.role || 'defaultRole',
                    });
                } else {
                    console.error('User name is undefined');
                }

                setAuthorization(accessToken);
                navigate('/Service');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <AuthLayout
            hasSlider
            bottomLinks={
                <p className="text-muted">
                    {t("Don't have an account?")}{' '}
                    <Link to="/auth/signup" className="text-primary fw-semibold ms-1">
                        {t('Sign Up')}
                    </Link>
                </p>
            }>
            <h6 className="h5 mb-0 mt-3">{t('Welcome back!')}</h6>
            <p className="text-muted mt-1 mb-4">{t('Enter your email address and password to access AI Features')}</p>

            {(errors.email || errors.password) && (
                <Alert variant="danger" className="mb-3">
                    {errors.email?.message || errors.password?.message}
                </Alert>
            )}

            <VerticalForm<UserData> onSubmit={onSubmit}>
                <FormInput
                    type="email"
                    name="email"
                    label={t('Email')}
                    placeholder={t('Email')}
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />

                <FormInput
                    label={t('Password')}
                    type="password"
                    name="password"
                    placeholder={t('Password')}
                    action={
                        <Link to="/auth/forget-password" className="float-end text-muted text-unline-dashed ms-1 fs-13">
                            {t('Forgot your password?')}
                        </Link>
                    }
                    containerClass={'mb-3'}
                    register={register}
                    errors={errors}
                />

                <FormInput
                    type="checkbox"
                    name="remember"
                    label={t('Remember me')}
                    containerClass={'mb-3'}
                    defaultChecked
                    register={register}
                />

                <div className="mb-0 text-center d-grid">
                    <Button type="submit">{t('Log In')}</Button>
                </div>
            </VerticalForm>

            <div className="py-3 text-center">
                <span className="fs-13 fw-bold">{t('OR')}</span>
            </div>

            <Row>
                <Col xs={12} className="text-center">
                    <Link to="#" className="btn btn-white w-100">
                        <FeatherIcon icon="github" className="icon icon-xs me-2" />
                        {t('Github')}
                    </Link>
                </Col>
            </Row>
        </AuthLayout>
    );
};

export default Login;
