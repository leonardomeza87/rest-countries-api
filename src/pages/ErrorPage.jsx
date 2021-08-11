import { Link, useParams } from "react-router-dom";

import { ReactComponent as ArrowBack } from "../images/arrow-back.svg";

const ErrorPage = ({ error }) => {
  const { code } = useParams();

  return (
    <div className="error-page">
      <div className={error ? "container error" : "container"}>
        {!error && (
          <Link to="/" className="back">
            <button>
              <ArrowBack />
              <p>Back</p>
            </button>
          </Link>
        )}
        <h1>
          {error
            ? "A communication error has occurred with the API, check your internet"
            : `No results for the country code: ${code.toUpperCase()}`}
        </h1>
        {error && (
          <button
            className="retry"
            onClick={() => {
              document.location.reload();
            }}
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;