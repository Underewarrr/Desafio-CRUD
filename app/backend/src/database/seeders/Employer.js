module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('employers', [
        {
          id: '1',
          name: 'Lee',
          age: '32',
          role: 'Worker',
        },
        {
          id: '2',
          name: 'Bruce',
          age: '30',
          role: 'Manager',
        },
      ], {});
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('employers', null, {});
    },
  };