"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
});
client.connect();
exports.default = client;
