import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput } from 'components/form';

// images
import avatar from 'assets/images/avatars/img-8.jpg';

const AccountInformation = () => {
    /*
    form default values
    */
    const defaultValues = {
        name: 'Greeva Navadiya',
        email: 'greeva@coderthemes.com',
        display_name: 'Greeva N',
        phone: '+1 254 024 5400',
    };

    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter Name'),
            display_name: yup.string().required('Please enter Display Name'),
            phone: yup
                .string()
                .matches(/^(\+1 )\(?([0-9 ]{3})\)?[-. ]?([0-9 ]{3})[-. ]?([0-9]{4})$/, {
                    message: 'Invalid number',
                    excludeEmptyString: false,
                })
                .required('Please enter Phone'),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            visibility: yup.string().required('Please select Profile Visibility'),
            visibility1: yup.string().required('Please select Profile Visibility'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ defaultValues: defaultValues, resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /*
    handle form submission
    */
    const onSubmit = () => { };

    return (
        <>
            <h4 className="mt-3 mt-lg-0">Account Information</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="account-form">
                <h6 className="mt-4">Your Avatar</h6>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <img src={avatar} className="img-fluid avatar-md rounded-circle shadow" alt="..." />
                    </Col>
                    <Col>
                        <Link to="#" className="btn btn-outline-primary btn-sm">
                            Upload
                        </Link>
                        <Link to="#" className="btn btn-outline-danger btn-sm ms-2">
                            Remove
                        </Link>
                    </Col>
                </Row>

                <hr className="my-4" />

                <Row className="align-items-center">
                    <Col lg={6}>
                        <FormInput
                            type="text"
                            label="Name"
                            placeholder="Your Name"
                            name="name"
                            containerClass="mb-3"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                        <FormInput
                            type="email"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            containerClass="mb-3"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                    </Col>
                    <Col lg={6}>
                        <FormInput
                            type="text"
                            label="Display name"
                            placeholder="Display name"
                            name="display_name"
                            containerClass="mb-3"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                        <FormInput
                            type="text"
                            label="Phone"
                            placeholder="Phone number"
                            name="phone"
                            containerClass="mb-3"
                            register={register}
                            errors={errors}
                            control={control}
                        />
                    </Col>
                </Row>

                <hr className="my-2" />

                <Row className="my-3">
                    <Col lg={12}>
                        <div className="mb-3">
                            <label className="form-label">Profile Visibility</label>

                            <div className="mt-1">
                                <FormInput
                                    type="radio"
                                    name="visibility"
                                    id="visibilityPublic"
                                    value={'visibilityPublic'}
                                    label="Public"
                                    checked
                                    containerClass="form-check-inline"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />

                                <FormInput
                                    type="radio"
                                    name="visibility"
                                    id="visibilityPrivate"
                                    value={'visibilityPrivate'}
                                    label="Private"
                                    containerClass="form-check-inline ms-3"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                            </div>

                            <small className="form-text text-muted mt-2">
                                Making your profile public means anyone can see your information
                            </small>
                        </div>
                    </Col>
                    <Col lg={12} className="mt-2">
                        <div className="mb-3">
                            <label className="form-label">Contact Info Visibility</label>

                            <div className="mt-1">
                                <FormInput
                                    type="radio"
                                    name="visibility1"
                                    id="visibilityPublic1"
                                    value={'visibilityPublic1'}
                                    label="Public"
                                    checked
                                    containerClass="form-check-inline"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />

                                <FormInput
                                    type="radio"
                                    name="visibility1"
                                    id="visibilityPrivate1"
                                    value={'visibilityPrivate1'}
                                    label="Private"
                                    containerClass="form-check-inline ms-3"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                            </div>

                            <small className="form-text text-muted mt-2">
                                Making your contact info public means anyone can see your email and phone number
                            </small>
                        </div>
                    </Col>
                </Row>

                <hr className="mb-2" />

                <Row>
                    <Col lg={12}>
                        <Row className="align-items-center my-2">
                            <Col>
                                <label className="form-label mb-0">Remove account</label>
                                <small className="form-text text-muted">
                                    By removing your account you will lose all your data
                                </small>
                            </Col>

                            <Col lg="auto" className="text-end">
                                <Button variant="outline-danger" size="sm">
                                    Remove Account
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className="my-4" />

                <Row className="mt-2">
                    <Col xs={12}>
                        <Button type="submit">Save Changes</Button>
                    </Col>
                </Row>
            </form>
        </>
    );
};

export default AccountInformation;
