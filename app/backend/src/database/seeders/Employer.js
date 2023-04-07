module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('employers', [
        {
          name: 'Lee',
          age: '32',
          role: 'Worker',
        },
        {
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