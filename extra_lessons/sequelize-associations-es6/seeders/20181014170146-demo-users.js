module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    { email: 'email1@domain.com', createdAt: new Date(), updatedAt: new Date() },
    { email: 'email2@domain.com', createdAt: new Date(), updatedAt: new Date() },
    { email: 'email3@domain.com', createdAt: new Date(), updatedAt: new Date() },
    { email: 'email4@domain.com', createdAt: new Date(), updatedAt: new Date() },
    { email: 'email5@domain.com', createdAt: new Date(), updatedAt: new Date() },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
