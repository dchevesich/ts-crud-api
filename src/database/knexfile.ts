import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "Prokap123!",
      database: "ts_crud_db"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    seeds: {
      directory: "./src/database/seeds"
    }
  }
};

export default config;
