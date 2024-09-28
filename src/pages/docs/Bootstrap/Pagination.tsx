import { Card, Pagination } from 'react-bootstrap';

const Paginations = () => {
    return (
        <Card id="pagination">
            <Card.Body>
                <Card.Title as="h5" className="mb-0">
                    Pagination
                </Card.Title>
                <p className="sub-header">
                    Examples for showing pagination to indicate a series of related content exists across multiple pages
                </p>

                <Pagination>
                    <Pagination.Prev>Previous</Pagination.Prev>
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next>Next</Pagination.Next>
                </Pagination>

                <p className="sub-header mt-4">
                    You can use icon instead of showing text label for previous and next actions
                </p>

                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>

                <p className="sub-header mt-4">
                    Just add class modifier <code>.pagination-rounded</code> to
                    <code>.pagination</code> in order to have rounded page action link
                </p>

                <Pagination className="pagination-rounded">
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </Card.Body>
        </Card>
    );
};

export default Paginations;
