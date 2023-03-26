import { Client } from "pg";

const client = new Client({
  host: "db.flieiqvsbpgufctzipcn.supabase.co",
  port: 5432,
  user: "postgres",
  database: "postgres",
  password: "l3OwCtZME2MOk35o",
});
client.connect();

export default client;
