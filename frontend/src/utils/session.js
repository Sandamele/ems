import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
export const session = () => {
  let userSession = false;
  let user = null;
  let token = getCookie("token") ? getCookie("token") : null;
  if (token) {
    userSession = true;
    user = jwt.decode(token);
  }

  return { userSession, user, token};
};
