import { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const StandardModal = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="button-list me-2 mb-2 mb-sm-0">
                <Button className="btn-soft-primary" onClick={handleShow}>
                    Standard modal
                </Button>
            </div>

            {/* standard modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>You are out of storage space.</h5>
                    <p>To upload more data, please add additional storage space.</p>
                    <Form>
                        <Form.Label>Select Size: </Form.Label>
                        <Form.Select aria-label="selectSize">
                            <option selected>Choose...</option>
                            <option value="1">1 GB</option>
                            <option value="10">10 GB</option>
                            <option value="50">50 GB</option>
                            <option value="100">100 GB</option>
                            <option value="500">500 GB</option>
                            <option value="1000">1 TB</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="white" onClick={handleClose}>
                        Cancle
                    </Button>{' '}
                    <Button onClick={handleClose}>Upgrade</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const ModalSizes = () => {
    const [show, setShow] = useState<boolean>(false);
    const [size, setSize] = useState<'sm' | 'lg' | 'xl'>();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openModalWithSize = (size: 'sm' | 'lg' | 'xl') => {
        setSize(size);
        handleShow();
    };

    return (
        <>
            <div className="button-list">
                <Button className="btn-soft-secondary me-2 mb-2 mb-sm-0" onClick={() => openModalWithSize('xl')}>
                    Extra large modal
                </Button>
                <Button className="btn-soft-success me-2 mb-2 mb-sm-0" onClick={() => openModalWithSize('lg')}>
                    Large modal
                </Button>
                <Button className="btn-soft-info me-2 mb-2 mb-sm-0" onClick={() => openModalWithSize('sm')}>
                    Small Modal
                </Button>
            </div>
            <Modal show={show} onHide={handleClose} size={size}>
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
            </Modal>
        </>
    );
};

const VerticallyCenteredModal = () => {
    const [showCenteredModal, setShowCenteredModal] = useState<boolean>(false);

    return (
        <>
            <p className="sub-header mt-4">
                You can vertically center a modal by passing the <code>centered</code> prop.
            </p>
            <div className="button-list">
                <Button className="btn-soft-primary" onClick={() => setShowCenteredModal(true)}>
                    Vertically center
                </Button>
            </div>

            <Modal show={showCenteredModal} onHide={() => setShowCenteredModal(false)} centered>
                <Modal.Header onHide={() => setShowCenteredModal(false)} closeButton>
                    <Modal.Title as="h5">Center modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Overflowing text to show scroll behavior</h5>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p className="mb-0">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
};

const ScrollableModal = () => {
    const [showScrollableModal, setShowScrollableModal] = useState<boolean>(false);

    return (
        <>
            <p className="sub-header mt-4">
                Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead of the entire Modal when overflowing.
            </p>
            <div className="button-list">
                <Button className="btn-soft-primary" onClick={() => setShowScrollableModal(true)}>
                    Scrollable
                </Button>
            </div>
            <Modal show={showScrollableModal} onHide={() => setShowScrollableModal(false)} scrollable>
                <Modal.Header onHide={() => setShowScrollableModal(false)} closeButton>
                    <Modal.Title as="h5">Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
                        augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
                        nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={() => setShowScrollableModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

const ModalWithAlerts = () => {
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);

    const successClose = () => setShowSuccessModal(false);
    const errorClose = () => setShowErrorModal(false);

    return (
        <>
            <p className="sub-header mt-4">
                A modal can be used to show contexual messages including success, error, warning, information messages,
                etc.
            </p>

            <div className="button-list">
                <Button className="btn-soft-success me-2" onClick={() => setShowSuccessModal(true)}>
                    Success
                </Button>
                <Button className="btn-soft-danger" onClick={() => setShowErrorModal(true)}>
                    Error
                </Button>
            </div>

            {/* Success Modal */}
            <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)} size="sm" centered>
                <Modal.Header onHide={() => setShowSuccessModal(false)} closeButton className="border-0 pb-0" />
                <Modal.Body className="text-center">
                    <span className="icon icon-lg text-success">
                        <FeatherIcon icon="check-circle" className="icon-dual-success" />
                    </span>
                    <h4 className="text-success mt-0">Awesome!</h4>
                    <p className="mx-auto text-muted">We receieved your application and will process it shortly.</p>
                    <div className="mt-4">
                        <Button variant="white btn-sm" onClick={successClose}>
                            <FeatherIcon icon="arrow-left" className="icon-xs me-1" /> Back
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Erroe Modal */}
            <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)} size="sm" centered>
                <Modal.Header onHide={() => setShowErrorModal(false)} closeButton className="border-0 pb-0" />
                <Modal.Body className="text-center">
                    <span className="icon icon-md text-danger">
                        <FeatherIcon icon="alert-octagon" className="icon-dual-danger" />
                    </span>
                    <h4 className="text-danger mt-0">Something went wrong.</h4>
                    <p className="mx-auto text-muted mt-2">
                        We are unable to process your request at the moment. Our appologies, try back in about 5
                        minutes.
                    </p>
                    <div className="mt-4">
                        <Button variant="white btn-sm" onClick={errorClose}>
                            <FeatherIcon icon="arrow-left" className="icon-xs me-1" /> Back
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const Modals = () => {
    return (
        <Card id="modals">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Modals
                </Card.Title>
                <p className="sub-header">
                    Add dialogs to your site for lightboxes, user notifications, or completely custom content.
                </p>

                <div className="d-flex">
                    <StandardModal />
                    <ModalSizes />
                </div>

                <VerticallyCenteredModal />
                <ScrollableModal />
                <ModalWithAlerts />
            </Card.Body>
        </Card>
    );
};

export default Modals;
