

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Posts', [
    {
      body: 'Post 1',
      UserId: 1,
      createdAt:
      new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Post 2',
      UserId: 2,
      createdAt:
      new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Post 3',
      UserId: 3,
      createdAt:
      new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Post 4',
      UserId: 4,
      createdAt:
      new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Post 5',
      UserId: 5,
      createdAt:
      new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Posts', null, {}),
};
