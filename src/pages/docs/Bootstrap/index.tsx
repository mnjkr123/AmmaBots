import { Col } from 'react-bootstrap';

// components
import DocsLayout from '../layout';

import Alerts from './Alerts';
import AccordionExample from './Accordions';
import Badges from './Badges';
import Breadcrumbs from './Breadcrumb';
import Buttons from './Buttons';
import Cards from './Card';
import Carousels from './Carousel';
import Dropdowns from './Dropdown';
import FormElements from './FormsElement';
import TabsExample from './Tabs';
import Modals from './Modals';
import Progressbars from './Progressbars';
import Paginations from './Pagination';
import Spinners from './Spinners';
import OffcanvasExample from './Offcanvas';
import Popovers from './Popovers';
import Tooltips from './Tooltips';

// types
import { Variant } from '../types';

// dummy data
import { rightMenuItems } from './data';

const variants: Variant[] = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'orange', 'dark'];

const BootstrapExample = () => {
    return (
        <DocsLayout rightMenuItems={rightMenuItems}>
            <Col xs={12} lg={{ offset: 3, span: 9 }} xl={{ offset: 2, span: 8 }}>
                <Alerts />
                <AccordionExample />
                <Badges variants={variants} />
                <Breadcrumbs />
                <Buttons variants={variants} />
                <Cards />
                <Carousels />
                <Dropdowns />
                <FormElements />
                <TabsExample />
                <Modals />
                <Progressbars />
                <Paginations />
                <Spinners variants={variants} />
                <OffcanvasExample />
                <Popovers />
                <Tooltips />
            </Col>
        </DocsLayout>
    );
};

export default BootstrapExample;
