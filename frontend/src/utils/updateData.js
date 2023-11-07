import axios from "axios";

const BASE_URL = process.env.EMS_SERVER_LINK;
export const updateData = async (path, params, body, token = null) => {
  const url = `${BASE_URL}/${path}/${!!params ? params : ""}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  let data = null;
  let error = null;
  try {
    const response = await axios.put(url, body, { headers });
    data = response.data;
  } catch (err) {
    error = err.response;
  }
  return { data, error };
};
