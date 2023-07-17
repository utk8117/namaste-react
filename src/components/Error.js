import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps!!!</h1>
      <h2>Something went wrong!</h2>
      <img
        src="https://www.shutterstock.com/image-vector/404-error-page-sleeping-cat-260nw-1849647127.jpg"
        alt="kitten"
      />
    </div>
  );
};

export default Error;
