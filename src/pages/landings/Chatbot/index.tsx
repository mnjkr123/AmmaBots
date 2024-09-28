// component
import { Navbar1 } from '../../../components/navbars';
import { Hero13 } from '../../../components/heros';
import BackToTop from '../../../components/BackToTop';

import ClientsReview from './ClientsReview';
import Feature1 from './Feature1';
import Chatbot from './chatbot';

// import TextToImageLanding from './text2image';

import Footer from './Footer';

const Chat = () => {
    return (
        <>
            {/* header and hero */}
            <div className="header-2">
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-primary btn-sm" />
                <Hero13 />
            </div>

            {/* clients review */}
            <ClientsReview />

            {/* feature 1 */}
            <Feature1 />

            <Chatbot />

            {/* CTA + Footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Chat;
