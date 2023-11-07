import {getCookie} from 'cookies-next';
export const sessionSSR = (req, res) => {
  const token = getCookie('token', { req, res });
  if (!token || !token.length) return null;
  else return token;
}