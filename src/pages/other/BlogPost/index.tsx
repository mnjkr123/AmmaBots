// components
import { Navbar1 } from 'components/navbars';
import { Footer2 } from 'components/footer';
import BackToTop from 'components/BackToTop';

import Hero from './Hero';
import PostContent from './PostContent';
import PostNavigation from './PostNavigation';
import Comments from './Comments';

// dummy data
import { gallery } from '../Career/data';

const BlogPost = () => {
    return (
        <>
            <div>
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10 shadow"
                    buttonClass="btn-outline-secondary btn-sm"
                />
                <Hero />
            </div>

            {/* post content */}
            <PostContent gallery={gallery} />

            {/* navigation */}
            <PostNavigation />

            {/* comments */}
            <Comments />

            {/* footer */}
            <Footer2 />

            <BackToTop />
        </>
    );
};

export default BlogPost;
