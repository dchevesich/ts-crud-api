import type { Knex } from "knex";
import path from "path"; // <--- 1. IMPORTA ESTO

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
      
      directory: path.join(__dirname, "migrations") 
    },
    seeds: {
    
      directory: path.join(__dirname, "seeds")
    }
  }
};

export default config;