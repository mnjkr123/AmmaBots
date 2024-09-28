import { Card } from 'react-bootstrap';

// components
import PricingCards1 from '../../../components/pricing/PricingCards1';
import PricingCards2 from '../../../components/pricing/PricingCards2';

// dummy data
import { plans } from '../../../components/pricing/data';

const PricingCards = () => {
    return (
        <Card id="pricing-cards">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Pricing cards
                </Card.Title>
                <p className="sub-header">
                    Using bootstrap's <code>.card</code>, you can create a pricing card.
                </p>

                <PricingCards1 plans={plans} containerClass="mt-5" />
                <PricingCards2 plans={plans} />
            </Card.Body>
        </Card>
    );
};

export default PricingCards;
