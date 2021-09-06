
exports.up = knex => {
    return knex.schema
       .createTable("cohorts",table => {
         table.increments("id");
         table.string("members");
         table.text("name")
         table.text("logoUrl");
         table.timestamp("createdAt").defaultTo(knex.fn.now())
  
       })
  };
  
  // The exports.down method is used when a migration is rolled
  // back (reverted.) you should always a query that reverses
  // the query in "up".
  
  exports.down = knex => {
    return knex.schema.dropTable("cohorts");
  };
  
