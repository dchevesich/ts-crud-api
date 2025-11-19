import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Elimina datos previos
  await knex("users").del();

  // Inserta datos nuevos
  await knex("users").insert([
    {
      name: "Juan Pérez",
      email: "juan@example.com",
      password: "asd123!"
    },
    {
      name: "Ana González",
      email: "ana@example.com",
      password: "asd123!"
      
    },
    {
      name: "Roberto Soto",
      email: "roberto@example.com",
      password: "asd123!"
    }
  ]);
}