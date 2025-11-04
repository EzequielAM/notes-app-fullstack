import { DataTypes } from "sequelize";
export default (sequelize) => {
  const Category = sequelize.define("Category", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
  });
  return Category;
};
