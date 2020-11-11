import { URL } from "../components/Login";
import apiFacade, { handleHttpErrors } from "./apiFacade";

const adminFacade = () => {
  const getUsers = () => {
    return fetch(URL + "/api/users", apiFacade.makeOptions("GET", true)).then(
      handleHttpErrors
    );
  };
  return { getUsers };
};

const facade = adminFacade();
export default facade;
