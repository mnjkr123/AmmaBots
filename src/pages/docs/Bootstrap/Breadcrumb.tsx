import { Breadcrumb, Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Breadcrumbs = () => {
    return (
        <Card id="breadcrumb">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Breadcrumb
                </Card.Title>
                <p className="sub-header">
                    Indicate the current page’s location within a navigational hierarchy that automatically adds
                    separators via CSS. Add active prop to active <code>Breadcrumb.Item</code>
                </p>

                <Breadcrumb>
                    <Breadcrumb.Item active>Home</Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Library</Breadcrumb.Item>
                </Breadcrumb>

                <Breadcrumb>
                    <Breadcrumb.Item href="#">
                        <FeatherIcon icon="home" className="icon-xs" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
            </Card.Body>
        </Card>
    );
};

export default Breadcrumbs;
