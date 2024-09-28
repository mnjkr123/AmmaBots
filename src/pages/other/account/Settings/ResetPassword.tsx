import { Button, Col, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput, VerticalForm } from 'components/form';

const ResetPassword = () => {
    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            current_password: yup.string().required('Please enter Current Password'),
            new_password: yup
                .string()
                .required('Please enter New Password')
                .min(6, 'Your password must be longer than 6 characters.'),
            confirm_password: yup
                .string()
                .oneOf([yup.ref('new_password'), null], 'Passwords must match')
                .required('Please enter Confirm Password'),
        })
    );

    /*
        handle form submission
        */
    const onSubmit = () => { };

    return (
        <>
            <h4 className="mt-3 mt-lg-0">Password</h4>
            <VerticalForm onSubmit={onSubmit} resolver={schemaResolver} formClass="password-form mt-4">
                <FormInput label={'Current Password'} type="password" name="current_password" containerClass={'mb-3'} />
                <FormInput label={'New Password'} type="password" name="new_password" containerClass={'mb-3'} />
                <FormInput label={'Confirm Password'} type="password" name="confirm_password" containerClass={'mb-3'} />

                <hr className="my-4" />

                <Row className="mt-3">
                    <Col lg={12}>
                        <Button type="submit">Update Password</Button>
                    </Col>
                </Row>
            </VerticalForm>
        </>
    );
};

export default ResetPassword;
