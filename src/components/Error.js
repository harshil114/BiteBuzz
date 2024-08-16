// import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Error = () => {
  // const err = useRouteError();
  return (
    <div>
      <div className="error-container-logo flex justify-end mt-2">
        <Link to="/">
          <img src={logo} alt="logo-img" className="logo h-8" />
        </Link>
      </div>
      <div
        className="container-data h-screen max-w-[430px] mx-auto pt-20"
        style={{ color: " rgba(2, 6, 12, 0.75)" }}
      >
        <div className="error-text flex flex-col justify-center">
          <h1 className="error-heading text-2xl font-bold mb-3">
            Sorry, something went wrong.
          </h1>
          <div className="span flex flex-col font-normal text-lg">
            <span className="mb-3">
              We're working on getting this fixed as soon as we can.
            </span>
            <span className="mb-3">
              <u>
                <Link to="/">Go Back</Link>
              </u>
            </span>
          </div>
          <hr />
        </div>

        {/* <h3>
        {err.status} {err.statusText}
      </h3> */}
      </div>
    </div>
  );
};

export default Error;
