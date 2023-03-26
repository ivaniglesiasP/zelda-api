"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: "db.flieiqvsbpgufctzipcn.supabase.co",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "l3OwCtZME2MOk35o",
});
client.connect();
exports.default = client;
