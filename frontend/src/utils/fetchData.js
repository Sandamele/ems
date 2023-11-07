import axios from "axios";

const BASE_URL = process.env.EMS_SERVER_LINK;

export const fetchData = async (path, params = null, token = null) => {
  const url = `${BASE_URL}/${path}/${!!params ? params : ""}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  let data = null;
  let error = null;
  let loading = true;

  // Create a headers object with an Authorization header if a token is provided.

  try {
    const response = await axios.get(url, { headers });
    data = response.data;
    loading = false;
  } catch (err) {
    error = err.response; // Capture the error response
    loading = false;
  }

  return { data, error, loading };
};
