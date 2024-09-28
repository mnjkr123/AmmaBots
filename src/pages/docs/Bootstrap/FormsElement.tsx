import { Card, Col, Form, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const BasicFormInput = () => {
    return (
        <Form>
            <Row>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Text Input</Form.Label>
                        <Form.Control type="text" placeholder="A text input" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password Input</Form.Label>
                        <Form.Control type="password" defaultValue="123456" />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Default Select</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Default Option</option>
                            <option value="1">Option Select Name</option>
                            <option value="2">Option Select Name</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFileUpload">
                        <Form.Label>File Upload</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicDefaultSelect">
                        <Form.Label>Default Select Multiple</Form.Label>
                        <select className="form-select" multiple>
                            <option value="option_select0">Default Option</option>
                            <option value="option_select1">Option select name</option>
                            <option value="option_select2">Option select name</option>
                            <option value="option_select2">Option select name</option>
                            <option value="option_select2">Option select name</option>
                        </select>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicInputIcon">
                        <Form.Label>Input with icon</Form.Label>
                        <div className="form-control-with-hint">
                            <input type="text" className="form-control" placeholder="Input placeholder" />
                            <span className="form-control-feedback">
                                <FeatherIcon icon="search" className="icon-xs" />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicDefaultSelect">
                        <Form.Label>Input with hint text</Form.Label>
                        <div className="form-control-with-hint">
                            <input type="text" className="form-control" placeholder="Input placeholder" />
                            <span className="form-control-feedback">USD</span>
                        </div>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

const FormInputSize = () => {
    return (
        <Form>
            <Row>
                <Col md={4}>
                    <Form.Control size="lg" type="text" placeholder=".form-control-lg" />
                </Col>
                <Col md={4}>
                    <Form.Control type="text" placeholder="Default input" />
                </Col>
                <Col md={4}>
                    <Form.Control size="sm" type="text" placeholder=".form-control-sm" />
                </Col>
            </Row>
        </Form>
    );
};

const Checkbox = () => {
    return (
        <Form>
            <Form.Check type="checkbox" id="checkbox1" label="Check this custom checkbox" />
            <Form.Check type="checkbox" id="checkbox2" label="Check this custom checkbox 2" />
        </Form>
    );
};

const Radio = () => {
    return (
        <Form>
            <Form.Check type="radio" id="radio1" label="Check this custom radio" name="radio" />
            <Form.Check type="radio" id="radio2" label="Check this custom radio 2" name="radio" />
        </Form>
    );
};

const Range = () => {
    return (
        <Form>
            <Form.Range />
        </Form>
    );
};

const FormElements = () => {
    return (
        <Card id="forms">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Form Elements
                </Card.Title>
                <p className="sub-header">
                    Examples and usage guidelines for form control styles, layout options, and custom components for
                    creating a wide variety of forms.
                </p>

                <BasicFormInput />

                <p className="sub-header mt-4">
                    Use <code>size</code> on <code>&lt;FormControl&gt;</code> to change the size of the input.
                </p>

                <FormInputSize />

                <p className="sub-header mt-4">
                    By default, any number of checkboxes and radios that are immediate sibling will be vertically
                    stacked and appropriately spaced with FormCheck.
                </p>

                <Row>
                    <Col sm={6}>
                        <Checkbox />
                    </Col>
                    <Col sm={6}>
                        <Radio />
                    </Col>
                </Row>

                <p className="sub-header mt-4">
                    Use our custom range inputs for consistent cross-browser styling and built-in customization.
                </p>

                <Range />
            </Card.Body>
        </Card>
    );
};

export default FormElements;
