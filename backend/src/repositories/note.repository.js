export default class NoteRepository {
  constructor(models) {
    this.Note = models.Note;
    this.Category = models.Category;
  }
  create(data) {
    return this.Note.create(data);
  }
  findAll(where = {}, categoryId = null) {
    const base = { where, order: [["updatedAt", "DESC"]] };
    if (categoryId) {
      base.include = [
        {
          model: this.Category,
          where: { id: categoryId },
          through: { attributes: [] },
        },
      ];
    } else {
      base.include = [{ model: this.Category, through: { attributes: [] } }];
    }
    return this.Note.findAll(base);
  }
  findById(id) {
    return this.Note.findByPk(id, {
      include: [{ model: this.Category, through: { attributes: [] } }],
    });
  }
  async update(id, data) {
    const n = await this.Note.findByPk(id);
    if (!n) return null;
    return n.update(data);
  }
  async delete(id) {
    return this.Note.destroy({ where: { id } });
  }
}
