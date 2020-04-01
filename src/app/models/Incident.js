import Sequelize, { Model } from 'sequelize';

class Incident extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong' });
  }
}

export default Incident;
