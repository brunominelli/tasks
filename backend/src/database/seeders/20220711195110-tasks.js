module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        task: 'Reunião com Coordenador Pedagógico',
        deadline: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        task: 'Correção de provas do período noturno',
        deadline: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        task: 'Defesa de Tese de Doutorado',
        deadline: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        task: 'Revisar de artigo científico',
        deadline: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        task: 'Visitar empresa parceira da universidade',
        deadline: Sequelize.literal('CURRENT_TIMESTAMP'),
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('Tasks', null, {});
  },
};
