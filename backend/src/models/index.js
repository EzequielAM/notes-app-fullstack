import Note from "./note.js";
import Category from "./category.js";
import NoteCategory from "./noteCategory.js";

export default function initModels(sequelize) {
  const models = {};
  models.Note = Note(sequelize);
  models.Category = Category(sequelize);
  models.NoteCategory = NoteCategory(sequelize);

  // Asociaciones N:M
  models.Note.belongsToMany(models.Category, {
    through: models.NoteCategory,
    foreignKey: "noteId",
  });
  models.Category.belongsToMany(models.Note, {
    through: models.NoteCategory,
    foreignKey: "categoryId",
  });

  return models;
}
