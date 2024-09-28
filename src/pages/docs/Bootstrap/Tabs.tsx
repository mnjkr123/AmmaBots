import { Card, Nav, Tab } from 'react-bootstrap';

type TabContentType = {
    id: number;
    title: string;
    icon?: string;
    text: string;
    text2: string;
};

const tabContents: TabContentType[] = [
    {
        id: 1,
        title: 'Home',
        icon: 'uil-home-alt',
        text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim.`,
        text2: `Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.`,
    },
    {
        id: 2,
        title: 'Profile',
        icon: 'uil-user',
        text: `Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras
                dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
                tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                ac, enim.`,
        text2: `Vakal text here dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim.`,
    },
    {
        id: 3,
        title: 'Messages',
        icon: 'uil-envelope',
        text: `Vakal text here dolor sit amet,consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.Aenean massa.Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                Nulla consequat massa quis enim.`,
        text2: `Donec pede justo, fringilla vel, aliquet nec, vulputate
                eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                justo. Nullam dictum felis eu pede mollis pretium. Integer
                tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean
                vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.`,
    },
];

const NavTabs = () => {
    return (
        <Tab.Container defaultActiveKey="Profile">
            <Nav as="ul" variant="tabs">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <Nav.Item as="li" key={index.toString()}>
                            <Nav.Link className="cursor-pointer" eventKey={tab.title}>
                                <span className="d-block d-sm-none">
                                    <i className={tab.icon}></i>
                                </span>
                                <span className="d-none d-sm-block">{tab.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
            <Tab.Content className="p-3 text-muted">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index.toString()}>
                            <p>{tab.text}</p>
                            <p className="mb-0">{tab.text2}</p>
                        </Tab.Pane>
                    );
                })}
            </Tab.Content>
        </Tab.Container>
    );
};

const NavPills = () => {
    return (
        <Tab.Container defaultActiveKey="Profile">
            <Nav as="ul" justify variant="pills" className="p-1 navtab-bg">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <Nav.Item as="li" key={index.toString()}>
                            <Nav.Link className="cursor-pointer" eventKey={tab.title}>
                                <span className="d-block d-sm-none">
                                    <i className={tab.icon}></i>
                                </span>
                                <span className="d-none d-sm-block">{tab.title}</span>
                            </Nav.Link>
                        </Nav.Item>
                    );
                })}
            </Nav>
            <Tab.Content className="text-muted">
                {(tabContents || []).map((tab, index) => {
                    return (
                        <Tab.Pane eventKey={tab.title} id={String(tab.id)} key={index.toString()}>
                            <p>{tab.text}</p>
                            <p className="mb-0">{tab.text2}</p>
                        </Tab.Pane>
                    );
                })}
            </Tab.Content>
        </Tab.Container>
    );
};

const TabsExample = () => {
    return (
        <Card id="tabs">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Tabs
                </Card.Title>
                <p className="sub-header">
                    <code>Tabs</code> is a higher-level component for quickly creating a <code>Nav</code> matched with a
                    set of <code>TabPanes</code>.
                </p>

                <NavTabs />
                <NavPills />
            </Card.Body>
        </Card>
    );
};

export default TabsExample;
