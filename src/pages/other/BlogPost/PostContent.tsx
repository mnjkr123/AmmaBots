import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// types
import { GalleryItem } from '../Career/types';

// components
import Gallery from './Gallery';

type PostContentProps = {
    gallery: GalleryItem[];
};

const PostContent = ({ gallery }: PostContentProps) => {
    return (
        <section className="position-relative pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                            dicta maiores, eos culpa.
                        </p>
                        <p className="mb-4">
                            Voluptatum animi, voluptate sint aperiam facere a nam, ex reiciendis eum nemo ipsum nobis,
                            rem illum cupiditate at quaerat amet qui recusandae hic, atque laboriosam perspiciatis? Esse
                            quidem minima, voluptas necessitatibus, officia culpa quo nulla, cupiditate iste vel unde
                            magni.
                        </p>

                        <figure className="figure">
                            {/* image */}
                            <img
                                src="https://source.unsplash.com/GXNo-OJynTQ/1920x720"
                                alt=""
                                className="figure-img img-fluid rounded"
                            />
                            <figcaption className="figure-caption text-center">
                                The image caption referencing the above image
                            </figcaption>
                        </figure>

                        <h3 className="mt-4">Itaque earum rerum hic tenetur sapiente delectu</h3>
                        <p className="mb-2">
                            Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita
                            distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo
                            minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor
                            repellendus.
                        </p>

                        <blockquote className="blockquote p-4 my-4 bg-light">
                            <p className="">
                                Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium
                                totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                beataevitae dicta sunt explicabo tempore cum soluta.
                            </p>
                            <footer className="blockquote-footer mt-0">
                                <small className="fs-13">Christian Hall</small>
                            </footer>
                        </blockquote>

                        <p className="pb-2">
                            At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                            cupiditate provident similique sunt in culpa qui officia deserunt mollitia animi id est
                            laborum et fuga.
                        </p>
                        <p className="pb-2">
                            Itaque earum rerum hic tenetur sapiente delectu aut reiciendis voluptatibus maiores alias
                            consequ perferendis doloribus asperiores repellat. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab
                            illo inventore veritatisquasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <p className="pb-2">
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam
                            nisi aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                            voluptate lit esse quam nihil molestiae consequatur eligendi optio cumque nihil impedit quo
                            minus id quod maxime placeat facere possimus omnis voluptas assumenda est vel illum qui
                            dolorem eum fugiat quo voluptas aperiam, eaque ipsa quae ab illo inventore.
                        </p>

                        <div className="mt-4">
                            <Gallery gallery={gallery} />
                        </div>

                        <h5 className="mt-2">Conclusion</h5>
                        <p>
                            Itaque earum rerum hic tenetur sapiente delectus aut reiciendis voluptatibus maiores alias
                            consequatur aut perferendis doloribus asperiores repellat qui dolorem ipsum quia dolor sit
                            amet consectetur velitsedquia non numquam eius modi tempora incidunt.
                        </p>

                        <p className="mb-2">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>

                        <p className="mb-2">
                            <FeatherIcon className="icon-xs icon me-2" icon="minus" /> Dream places
                        </p>
                        <p className="mb-2">
                            <FeatherIcon className="icon-xs icon me-2" icon="minus" /> Walking/Hiking tours
                        </p>
                        <p className="mb-2">
                            <FeatherIcon className="icon-xs icon me-2" icon="minus" /> Tennis lessons with expert
                            coaches
                        </p>
                        <p className="mb-2">
                            <FeatherIcon className="icon-xs icon me-2" icon="minus" /> Sailing adventures
                        </p>

                        {/* tags */}
                        <div className="mt-5">
                            <Link className="btn btn-sm btn-soft-secondary mb-1 me-1" to="#">
                                Startup
                            </Link>
                            <Link className="btn btn-sm btn-soft-secondary mb-1 me-1" to="#">
                                Website Design
                            </Link>
                            <Link className="btn btn-sm btn-soft-secondary mb-1 me-1" to="#">
                                Website Development
                            </Link>
                            <Link className="btn btn-sm btn-soft-secondary mb-1" to="#">
                                Bootstrap
                            </Link>
                        </div>

                        {/* social sharing */}
                        <ul className="list-inline mb-0 mt-4">
                            <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">
                                Share:
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-primary" icon="facebook" />
                                </Link>
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-info" icon="twitter" />
                                </Link>
                            </li>
                            <li className="list-inline-item align-middle">
                                <Link to="#">
                                    <FeatherIcon className="icon-xs icon-dual-danger" icon="instagram" />
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PostContent;
