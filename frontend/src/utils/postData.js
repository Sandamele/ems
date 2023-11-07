import axios from "axios";

const BASE_URL = process.env.EMS_SERVER_LINK;
export const postData = async (path, body, token = null) => {
  const url = `${BASE_URL}/${path}`;
  let data = null;
  let error = null;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  await axios
    .post(url, body, {headers})
    .then((result) => (data = result.data))
    .catch((errors) => (error = errors.response.data.error));
  return { data, error };
};
