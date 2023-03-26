"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = void 0;
const getCharacters = () => {
    const { Client } = require("pg");
    const client = new Client({
        host: "db.flieiqvsbpgufctzipcn.supabase.co",
        port: 5432,
        user: "postgres",
        database: "postgres",
        password: "l3OwCtZME2MOk35o",
    });
    client.connect();
    client.query("SELECT * FROM characters", (_err, res) => {
        return res;
    });
};
exports.getCharacters = getCharacters;
