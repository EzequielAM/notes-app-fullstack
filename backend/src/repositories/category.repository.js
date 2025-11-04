export default class CategoryRepository {
  constructor(models) {
    this.Category = models.Category;
  }
  create(data) {
    return this.Category.create(data);
  }
  findAll() {
    return this.Category.findAll({ order: [["name", "ASC"]] });
  }
  findById(id) {
    return this.Category.findByPk(id);
  }
  findByName(name) {
    return this.Category.findOne({ where: { name } });
  }
  async delete(id) {
    return this.Category.destroy({ where: { id } });
  }
}
