import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError();

  return (
    <div className="career-error">
      <h2>Error!</h2>
      <p>{error.message}</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};
export default CareersError;
