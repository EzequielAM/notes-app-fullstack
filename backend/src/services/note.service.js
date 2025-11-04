export default class NoteService {
  constructor(repo, models) {
    this.repo = repo;
    this.models = models;
  }

  create(dto) {
    return this.repo.create(dto);
  }
  listActive(categoryId) {
    return this.repo.findAll({ archived: false }, categoryId);
  }
  listArchived(categoryId) {
    return this.repo.findAll({ archived: true }, categoryId);
  }
  get(id) {
    return this.repo.findById(id);
  }
  update(id, dto) {
    return this.repo.update(id, dto);
  }
  archive(id) {
    return this.repo.update(id, { archived: true });
  }
  unarchive(id) {
    return this.repo.update(id, { archived: false });
  }
  remove(id) {
    return this.repo.delete(id);
  }

  async addCategory(noteId, categoryId) {
    const note = await this.models.Note.findByPk(noteId);
    const cat = await this.models.Category.findByPk(categoryId);
    if (!note || !cat) return null;
    await note.addCategory(cat);
    return this.get(noteId);
  }

  async removeCategory(noteId, categoryId) {
    const note = await this.models.Note.findByPk(noteId);
    const cat = await this.models.Category.findByPk(categoryId);
    if (!note || !cat) return null;
    await note.removeCategory(cat);
    return this.get(noteId);
  }
}
