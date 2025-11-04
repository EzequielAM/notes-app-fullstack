import { DataTypes } from "sequelize";
export default (sequelize) => {
  const Note = sequelize.define("Note", {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT },
    archived: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
  return Note;
};
