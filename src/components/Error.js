import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>Oops!! We will be back soon</h3>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
