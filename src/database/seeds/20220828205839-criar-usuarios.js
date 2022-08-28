const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Gabriel1',
        email: "gabrielgmack1@gmail.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Gabriel2',
        email: "gabrielgmack2@gmail.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        nome: 'Gabriel3',
        email: "gabrielgmack3@gmail.com",
        password_hash: await bcryptjs.hash("123456", 8),
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  async down() { console.log(); }
};
