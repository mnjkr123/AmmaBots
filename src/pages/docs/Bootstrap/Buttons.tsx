import { Button, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Variant } from '../types';

type ButtonsProps = {
    variants: Variant[];
};

type ButtonVariant = Variant | 'link' | 'white';

const Buttons = ({ variants }: ButtonsProps) => {
    const buttonVariants1: ButtonVariant[] = [...variants, 'link'];
    const buttonVariants2: ButtonVariant[] = [...variants, 'link', 'white'];

    return (
        <Card id="buttons">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Buttons
                </Card.Title>
                <p className="sub-header">
                    Use any of the available button style types to quickly create a styled button. Just modify the{' '}
                    <code>variant</code> prop.
                </p>

                {(buttonVariants1 || []).map((item, index) => {
                    return (
                        <Button variant={item} className="me-2 mb-2 mb-xxl-0" key={index.toString()}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}

                <p className="sub-header mt-4">
                    For a lighter touch, Buttons also come in <code>outline-*</code> variants with no background color.
                </p>

                {(buttonVariants2 || []).map((item, index) => {
                    return (
                        <Button
                            variant={item !== 'white' ? 'outline-' + item : item}
                            className="me-2 mb-2 mb-xxl-0"
                            key={index.toString()}
                        >
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}

                <p className="sub-header mt-4">
                    Replace the default modifier classes with the <code>.btn-soft-*</code>
                    ones to have a softer background color on any button.
                </p>

                {(buttonVariants1 || []).map((item, index) => {
                    return (
                        <Button variant={'soft-' + item} className="me-2 mb-2 mb-xl-0" key={index.toString()}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}

                <p className="sub-header mt-4">
                    Add a class <code>.btn-rounded</code> with the default modifier classes to have rounded edges.
                </p>

                {(buttonVariants1 || []).map((item, index) => {
                    return (
                        <Button variant={item} className="btn-rounded me-2 mb-2 mb-xl-0" key={index.toString()}>
                            {item!.charAt(0).toUpperCase() + item!.slice(1)}
                        </Button>
                    );
                })}

                <p className="sub-header mt-4">
                    Fancy larger or smaller buttons? Add <code>size="lg"</code>, <code>size="sm"</code> for additional
                    sizes.
                </p>

                <Button variant="primary" size="lg" className="me-2 mb-2 mb-sm-0">
                    Large button
                </Button>
                <Button variant="primary" className="me-2 mb-2 mb-sm-0">
                    Large button
                </Button>
                <Button variant="primary" size="sm" className="me-2 mb-2 mb-sm-0">
                    Large button
                </Button>

                <p className="sub-header mt-4">Buttons with icon - variations</p>

                <Button variant="primary" className="me-2 mb-2 mb-sm-0">
                    <FeatherIcon icon="play" className="me-1" />
                    Button with icon on left
                </Button>
                <Button variant="primary" className="me-2 mb-2 mb-sm-0">
                    Button with icon on right
                    <FeatherIcon icon="play" className="ms-1" />
                </Button>
                <Button variant="primary" className="me-2 mb-2 mb-sm-0 btn-icon d-inline-flex">
                    <FeatherIcon icon="play" />
                </Button>
                <Button variant="primary" className="btn-rounded-circle btn-icon d-inline-flex">
                    <FeatherIcon icon="play" />
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Buttons;
