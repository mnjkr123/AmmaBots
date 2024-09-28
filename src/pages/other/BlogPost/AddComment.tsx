import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { FormInput } from 'components/form';

const AddComment = () => {
    /*
   form validation schema
   */
    const schemaResolver = yupResolver(
        yup.object().shape({
            name: yup.string().required('Please enter Name'),
            email: yup.string().required('Please enter Email').email('Please enter valid Email'),
            subject: yup.string().required('Please enter Subject'),
            message: yup.string().required('Please enter Message'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ defaultValues: {}, resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /*
    handle form submission
    */
    const onSubmit = () => {};

    return (
        <div className="mt-5 mb-lg-0 mb-5">
            <Card className="border">
                <Card.Body>
                    <h4 className="mb-3 mt-0">Post a comment</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className="account-form">
                        <Row>
                            <Col md={6}>
                                <FormInput
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    containerClass="mb-3"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={6}>
                                <FormInput
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    containerClass="mb-3"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={12}>
                                <FormInput
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    containerClass="mb-3"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col md={12}>
                                <FormInput
                                    type="textarea"
                                    rows={3}
                                    placeholder="Message"
                                    name="message"
                                    containerClass="mb-3"
                                    register={register}
                                    errors={errors}
                                    control={control}
                                />
                                <Button type="submit" variant="secondary">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddComment;
