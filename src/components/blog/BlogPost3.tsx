import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

import { Post } from './types';

type BlogPostProps = {
    post: Post;
};

const BlogPost3 = ({ post }: BlogPostProps) => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className={classNames(post.overlay ? 'overlay-' + post.overlay : 'overlay')}></div>
                <span className={classNames('card-badge', 'top-right', 'bg-' + post.tag.variant, 'text-white')}>
                    {post.tag.value}
                </span>

                <Card.Img src={post.image} alt="Card Image" variant="top" />

                <div className="card-overlay-bottom">
                    <h2>
                        <Link to="/pages/blog/post" className="text-white">
                            {post.title}
                        </Link>
                    </h2>

                    <div className="avatar-group">
                        {(post.groupAvatars || []).map((img, index) => {
                            return (
                                <Link to="#" className="avatar-group-item me-1" key={index.toString()}>
                                    <img
                                        src={img}
                                        alt="avatar"
                                        className="img-fluid avatar-xs rounded-circle avatar-border"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default BlogPost3;
