// It checks whether the server is running using either the .env.production or .env.development
const env =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
require("dotenv").config({ path: env });
