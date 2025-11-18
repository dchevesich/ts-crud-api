import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("status").notNullable().defaultTo("pending");
    table.integer("user_id").notNullable().references("id").inTable("users");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("tasks");
}