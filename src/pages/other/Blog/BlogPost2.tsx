import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Post } from 'components/blog';

type BlogPostProps = {
    post: Post;
};

const BlogPost2 = ({ post }: BlogPostProps) => {
    return (
        <div>
            <img src={post.image} alt="crypto" className="img-fluid d-block shadow rounded" />

            <div className="mt-3">
                <Link to="#">
                    <Badge bg="" className={classNames('badge-soft-' + post.tag.variant, 'mb-1')}>
                        {post.tag.value}
                    </Badge>
                </Link>
            </div>

            <h4 className="fw-semibold mt-1">
                <Link to="/pages/blog/post">{post.title}</Link>
            </h4>

            <p className="text-muted">
                {post.description}{' '}
                <Link to="/pages/blog/post" className="text-primary">
                    read more
                </Link>
            </p>
        </div>
    );
};

export default BlogPost2;
