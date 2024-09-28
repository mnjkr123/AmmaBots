import { Col } from 'react-bootstrap';

// component
import DocsLayout from '../layout';

import AosAnimation from './AosAnimation';
import CounterUp from './CounterUp';
import Jarallax from './Jarallax';
import Swiper from './Swiper';

// dummy data
import { rightMenuItems } from './data';

const Plugins = () => {
    return (
        <DocsLayout rightMenuItems={rightMenuItems}>
            <Col xs={12} lg={{ offset: 3, span: 9 }} xl={{ offset: 2, span: 8 }}>
                <AosAnimation />
                <CounterUp />
                <Jarallax />
                <Swiper />
            </Col>
        </DocsLayout>
    );
};

export default Plugins;
