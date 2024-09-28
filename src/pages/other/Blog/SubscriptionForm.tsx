import { Link } from 'react-router-dom';

const SubscriptionForm = () => {
    return (
        <div className="border rounded px-4 py-3">
            <div className="mb-4">
                <h4 className="mt-0">Get the latest on product development from Prompt</h4>
                <p className="text-muted">
                    We send a weekly newsletter containing latest updates in product development
                </p>
            </div>

            <form>
                <label className="visually-hidden form-label" htmlFor="email">
                    Subscribe
                </label>
                <div className="mb-2">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter Your Email"
                        aria-label="Enter Your Email"
                    />
                </div>
                <Link to="#" type="submit" className="btn btn-primary d-block mb-1">
                    Subscribe
                </Link>
                <p>
                    <small>*No spam ever.</small>
                </p>
            </form>
        </div>
    );
};

export default SubscriptionForm;
