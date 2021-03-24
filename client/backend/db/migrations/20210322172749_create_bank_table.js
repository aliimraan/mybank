
exports.up = function(knex) {
    return knex.schema
    .createTable('users', function(table) {
        table.increments().primary()
        table.string('firstName', 255)
        table.string('lastName', 255)
        table.bigInteger ('mobileNumber')
        table.string('email', 255)
        table.string('password', 255)
        table.integer('cardNo', 255)
        table.string('dob', 255)
        table.string('role', 255).defaultTo('user')
        table.timestamp(true,true)
    })
    .createTable('accounts', function(table) {
        table.increments().primary()
        table.string('type', 255)
        table.integer('amount', 255)
        table.integer('totalAmount', 255)
        table.integer('c_id').references('id').inTable('users')
        table.timestamp(true,true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('accounts').dropTable('users')
};
