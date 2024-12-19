const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const env = process.env.ENV;

export default {
  port: 3000,
  dbURI: `mongodb+srv://${dbUser}:${dbPass}@cluster0.6rqzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  env: env,
};
