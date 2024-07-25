import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3 className="error font-semibold text-center text-red-700 text-3xl mt-5">
        Oops!! We will be back soon
      </h3>
      <h3>
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
