import { Client } from "pg";
require('dotenv').config()

const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
});
client.connect();

export default client;
