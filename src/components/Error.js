import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // const { status, statusText } = error;
  return (
    <>
      <h1>Sorry Some error occoured </h1>
      {/* <p>{console.log(error)}</p> */}
    </>
  );
};

export default Error;
