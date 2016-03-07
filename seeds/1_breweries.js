
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('table_name').del(),

    // Inserts seed entries
    knex('breweries').insert({name: 'Comrade', city: 'Denver', state: 'CO'}),
    knex('breweries').insert({name: 'Ska', city: 'Durango', state: 'CO'})
  );
};
