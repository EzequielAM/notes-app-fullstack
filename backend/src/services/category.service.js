export default class CategoryService {
  constructor(repo) {
    this.repo = repo;
  }
  create(dto) {
    return this.repo.create(dto);
  }
  list() {
    return this.repo.findAll();
  }
  remove(id) {
    return this.repo.delete(id);
  }
}
