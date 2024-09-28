import { Card, ProgressBar } from 'react-bootstrap';

const Progressbars = () => {
    return (
        <Card id="progressbars">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Progress
                </Card.Title>
                <p className="sub-header">
                    Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text
                    labels
                </p>

                <div>
                    <ProgressBar now={0} className="mb-3" />
                    <ProgressBar now={33} className="mb-3" />
                    <ProgressBar now={66} variant="success" className="mb-3" />
                    <ProgressBar now={100} variant="danger" className="mb-3" />
                    <ProgressBar now={25} variant="info" label="25%" className="mb-3" />
                </div>

                <p className="sub-header mt-4">
                    Uses a gradient to create a striped effect, and Add <code>animated</code> prop to animate the
                    stripes right to left.
                </p>

                <div>
                    <ProgressBar striped now={10} className="mb-3" />
                    <ProgressBar animated now={75} className="mb-3" />
                </div>

                <p className="sub-header mt-4">
                    We can set a <code>height</code> value on the <code>.progress</code>. The inner{' '}
                    <code>.progress-bar</code> will automatically resize accordingly.
                </p>

                <div>
                    <ProgressBar now={25} className="mb-3" style={{ height: '2px' }} />
                    <ProgressBar now={25} className="mb-3" style={{ height: '16px' }} />
                </div>
            </Card.Body>
        </Card>
    );
};

export default Progressbars;
