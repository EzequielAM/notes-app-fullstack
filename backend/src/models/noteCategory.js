import { DataTypes } from "sequelize";
export default (sequelize) => {
  const NoteCategory = sequelize.define(
    "NoteCategory",
    {
      noteId: { type: DataTypes.INTEGER, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    { timestamps: false },
  );
  return NoteCategory;
};
