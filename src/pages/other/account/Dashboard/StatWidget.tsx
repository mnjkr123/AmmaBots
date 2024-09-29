import React from 'react';

import { Card } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

type StatWidgetProps = {
    icon: string;
    variant: string;
    stats: number;
    title: string;
};

const StatWidget = ({ icon, variant, stats, title }: StatWidgetProps) => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex align-items-center">
                    <div
                        className={classNames(
                            'bg-soft-' + variant,
                            'avatar-sm',
                            'icon',
                            'icon-xs',
                            'icon-with-bg',
                            'rounded-sm',
                            'me-3'
                        )}>
                        <FeatherIcon icon={icon} className={classNames('icon-dual-' + variant)} />
                    </div>
                    <div className="flex-grow-1">
                        <h3 className="mt-0 mb-0">{stats}</h3>
                        <p className="text-muted mb-0">{title}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatWidget;
