import { Card, Spinner } from 'react-bootstrap';

// types
import { Variant } from '../types';

type SpinnersProps = {
    variants: Variant[];
};

const Spinners = ({ variants }: SpinnersProps) => {
    return (
        <Card id="spinners">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Spinners
                </Card.Title>
                <p className="sub-header">Spinners can be used to show the loading state in your projects.</p>

                {(variants || []).map((color, index) => {
                    return (
                        <Spinner animation="border" key={index.toString()} className="m-2" variant={color}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    );
                })}

                <p className="sub-header mt-4">
                    If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin,
                    it does repeatedly grow!
                </p>

                {(variants || []).map((color, index) => {
                    return (
                        <Spinner animation="grow" key={index.toString()} className="m-2" variant={color}>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default Spinners;
