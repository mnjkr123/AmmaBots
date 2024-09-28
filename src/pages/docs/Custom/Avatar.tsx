import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

// images
import avatar7 from '../../../assets/images/avatars/img-7.jpg';
import avatar2 from '../../../assets/images/avatars/img-2.jpg';
import avatar4 from '../../../assets/images/avatars/img-4.jpg';

const AvatarExample = () => {
    return (
        <Card id="avatars">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Avatars
                </Card.Title>
                <p className="sub-header">
                    Create and group avatars of different sizes and shapes with the size modifier css classes e.g.
                    <code>
                        avatar-{'{'}xl | lg | md | sm | xs{'}'}
                    </code>
                    . Using Bootstrap's naming convention, you can control size of avatar including standard avatar, or
                    scale it up to different sizes.
                </p>

                <div className="pt-4">
                    {['xl', 'lg', 'md', 'sm', 'xs'].map((size, index) => {
                        return (
                            <img
                                key={index.toString()}
                                src={avatar7}
                                alt="avatar"
                                className={classNames(
                                    'img-fluid',
                                    'avatar-' + size,
                                    'rounded-sm',
                                    'shadow-sm',
                                    'ms-5',
                                    'mb-2',
                                    'mb-xl-0'
                                )}
                            />
                        );
                    })}
                </div>

                <p className="sub-header mt-4">
                    Using an additional class <code>.rounded-circle</code>, you can create the rounded avatar.
                </p>

                <div className="pt-4">
                    {['xl', 'lg', 'md', 'sm', 'xs'].map((size, index) => {
                        return (
                            <img
                                key={index.toString()}
                                src={avatar7}
                                alt="avatar"
                                className={classNames(
                                    'img-fluid',
                                    'avatar-' + size,
                                    'rounded-circle',
                                    'shadow-sm',
                                    'ms-5',
                                    'mb-2',
                                    'mb-xl-0'
                                )}
                            />
                        );
                    })}
                </div>

                <p className="sub-header mt-4">
                    Using an additional class <code>.avatar-border</code>, you can give a nice border.
                </p>

                <div className="pt-4">
                    <img src={avatar7} alt="avatar" className="img-fluid avatar-lg rounded-circle avatar-border ms-5" />
                </div>

                <p className="sub-header mt-4">
                    Wrap the list of avatars with class <code>.avatar-group</code> to group and show multiple avatars.
                </p>

                <div className="avatar-group">
                    {[avatar7, avatar2, avatar4].map((img, index) => {
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
            </Card.Body>
        </Card>
    );
};

export default AvatarExample;
