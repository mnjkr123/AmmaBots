import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

// component
import { Navbar4 } from 'components/navbars';
import { Footer3 } from 'components/footer';

import ProfileWidget from './ProfileWidget';
import ReecentProjects from './RecentProjects';
import RevenueWidget from './RevenueWidget';
import StatWidget from './StatWidget';
import Tasks from './Tasks';

// dummy data
import { projects, tasks } from './data';

const Dashboard = () => {
    return (
        <>
            {/* header */}
            <Navbar4 fixedWidth />

            {/* page content */}
            <section className="position-relative overflow-hidden bg-gradient2 py-3 px-3">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="page-title">
                                <h3 className="mb-0">Hi Greeva</h3>
                                <p className="mt-1 fw-medium">Welcome to Prompt!</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {/* profile widget */}
                        <ProfileWidget />

                        {/* stat widgets */}
                        <Col lg={3}>
                            <StatWidget icon="check-circle" variant="success" stats={21} title="Tasks Completed" />
                            <StatWidget icon="edit-3" variant="info" stats={21} title="Tasks Inprogress" />
                        </Col>

                        {/* revenue widget */}
                        <RevenueWidget />
                    </Row>

                    {/* recent projects */}
                    <ReecentProjects projects={projects} />

                    {/* tasks */}
                    <Tasks tasks={tasks} />
                </Container>
            </section>

            {/* footer */}
            <Footer3 />
        </>
    );
};

export default Dashboard;
