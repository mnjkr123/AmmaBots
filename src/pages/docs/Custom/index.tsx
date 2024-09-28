import { Col } from 'react-bootstrap';

//  components
import DocsLayout from '../layout';

import AvatarExample from './Avatar';
import BlogItemsExample from './BlogItems';
import Gallery from './Gallery';
import IconExample from './Icons';
import PricingCards from './PricingItems';

// dummy data
import { rightMenuItems } from './data';

const CustomExample = () => {
    return (
        <DocsLayout rightMenuItems={rightMenuItems}>
            <Col xs={12} lg={{ offset: 3, span: 9 }} xl={{ offset: 2, span: 8 }}>
                <AvatarExample />
                <BlogItemsExample />
                <Gallery />
                <IconExample />
                <PricingCards />
            </Col>
        </DocsLayout>
    );
};

export default CustomExample;
