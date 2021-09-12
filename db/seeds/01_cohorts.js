
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'A', members: 'a, b, c, d, e, f', logoUrl: ''},
        {name: 'B', members: 'g, h, i, j, k, l', logoUrl: '#'},
        {name: 'C', members: 'm, n, o, p, q, r', logoUrl: '#'},
        {name: 'D', members: 's, t, u, v, w, x', logoUrl: '#'}
      ]);
    });
};