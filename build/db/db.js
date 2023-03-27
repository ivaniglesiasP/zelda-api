"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
const client = new pg_1.Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
});
client.connect();
exports.default = client;
