import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Image from 'next/image'; // Import Image component

// images
import user from 'assets/images/avatars/img-8.jpg';

// types
import { ProfileOption } from './types';

type ProfileProps = {
    profileOptions: ProfileOption[];
};

const ProfileDropdown = ({ profileOptions }: ProfileProps) => {
    return (
        <Dropdown as="li" className="nav-item">
            <Dropdown.Toggle as={Nav.Link} id="user">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        {/* Replace img with Image component */}
                        <Image
                            src={user} // Image source
                            alt="user" // Alt text for accessibility
                            className="avatar avatar-xs rounded-circle me-2" // Existing classes
                            height={30} // Set the height of the image
                            width={30} // Set the width of the image
                        />
                    </div>
                    <div className="flex-grow-1 ms-1 lh-base">
                        <span className="fw-semibold fs-13 d-block line-height-normal">Greeva N</span>
                        <span className="text-muted fs-13">Admin</span>
                    </div>
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-2" renderOnMount>
                {(profileOptions || []).map((profile, index) => {
                    return (
                        <React.Fragment key={index.toString()}>
                            {index === profileOptions.length - 1 && <Dropdown.Divider as="div" />}
                            <Dropdown.Item className="p-2">
                                <FeatherIcon icon={profile.icon} className="icon icon-xxs me-1 icon-dual" />
                                {profile.label}
                            </Dropdown.Item>
                        </React.Fragment>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
