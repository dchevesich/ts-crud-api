import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Elimina datos previos
  await knex("users").del();

  // Inserta datos nuevos
  await knex("users").insert([
    {
      name: "Juan Pérez",
      email: "juan@example.com"
    },
    {
      name: "Ana González",
      email: "ana@example.com"
    },
    {
      name: "Roberto Soto",
      email: "roberto@example.com"
    }
  ]);
}