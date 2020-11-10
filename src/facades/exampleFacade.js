import { URL } from "../components/Login";
import apiFacade, { handleHttpErrors } from "./apiFacade";

const exampleFacade = () => {
  const exampleMethod1 = () => {
    return fetch(URL + "/api/example", apiFacade.makeOptions("GET", true)).then(
      handleHttpErrors
    );
  };
  return { exampleMethod1 };
};

const facade = exampleFacade();
export default facade;
