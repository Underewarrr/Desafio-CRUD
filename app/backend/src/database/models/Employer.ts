import { Sequelize, Model, INTEGER, STRING } from 'sequelize';
import * as config from "../../config/database";

const sequelize = new Sequelize(config)

class Employer extends Model {
  id!: number;
  name!: string;
  age!: string;
  role!: string;
}

Employer.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(30),
    allowNull: false,
  },
  age: {
    type: STRING(30),
    allowNull: false,
  },
  role: {
    type: STRING(30),
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  modelName: 'employers',
  timestamps: false,
});

export default Employer;

