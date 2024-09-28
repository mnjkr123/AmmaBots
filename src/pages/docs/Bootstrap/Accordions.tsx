import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContext, Card, useAccordionButton } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type ContentType = {
    id: number;
    title: string;
    text: string;
};

type CustomToggleProps = {
    children: React.ReactNode;
    eventKey: string;
    containerClass: string;
    linkClass: string;
    callback?: (eventKey: string) => void;
};

const CustomToggle = ({ children, eventKey, containerClass, linkClass, callback }: CustomToggleProps) => {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link
            to="#"
            className={classNames(linkClass, {
                collapsed: !isCurrentEventKey,
            })}
            onClick={decoratedOnClick}
        >
            <Card.Header>
                <h5 className={containerClass}>
                    {children} <FeatherIcon icon="chevron-down" className="icon-xs accordion-arrow" />
                </h5>
            </Card.Header>
        </Link>
    );
};

const CustomAccordion = ({ item, index, length }: { item: ContentType; index: number; length: number }) => {
    return (
        <Card className={classNames('shadow-none', 'border', index + 1 === length ? 'mb-0' : 'mb-1')}>
            <CustomToggle eventKey={String(index)} containerClass="my-1 fs-16" linkClass="text-dark">
                {item.title}
            </CustomToggle>
            <Accordion.Collapse eventKey={String(index)}>
                <Card.Body className="text-muted pt-1">{item.text}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const AccordionExample = () => {
    const accordianContent: ContentType[] = [
        {
            id: 2,
            title: ' What is Lorem Ipsum?',
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa
                    nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua
                    put a bird on it squid single- origin coffee nulla assumenda
                    shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident.Ad vegan
                    excepteur butcher vice lomo.Leggings occaecat craft beer
                    farm - to - table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.`,
        },
        {
            id: 3,
            title: 'Why do we use it?',
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa
                    nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua
                    put a bird on it squid single- origin coffee nulla assumenda
                    shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident.Ad vegan
                    excepteur butcher vice lomo.Leggings occaecat craft beer
                    farm - to - table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.`,
        },
        {
            id: 4,
            title: 'Where does it come from?',
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa
                    nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua
                    put a bird on it squid single- origin coffee nulla assumenda
                    shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore
                    wes anderson cred nesciunt sapiente ea proident.Ad vegan
                    excepteur butcher vice lomo.Leggings occaecat craft beer
                    farm - to - table, raw denim aesthetic synth nesciunt you probably
                    haven't heard of them accusamus labore sustainable VHS.`,
        },
    ];

    return (
        <Card id="accordions">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Accordions
                </Card.Title>
                <p className="sub-header">
                    Build vertically collapsing accordions in combination with the Collapse component.
                </p>
                <Accordion defaultActiveKey="0" id="accordion" className="custom-accordionwitharrow">
                    {(accordianContent || []).map((item, index) => {
                        return (
                            <CustomAccordion
                                key={index.toString()}
                                item={item}
                                index={index}
                                length={accordianContent.length}
                            />
                        );
                    })}
                </Accordion>
            </Card.Body>
        </Card>
    );
};

export default AccordionExample;
