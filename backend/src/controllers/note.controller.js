export default class NoteController {
  constructor(service) {
    this.svc = service;
  }

  create = async (req, res) =>
    res.status(201).json(await this.svc.create(req.body));

  listActive = async (req, res) => {
    const { categoryId } = req.query;
    res.json(await this.svc.listActive(categoryId || null));
  };

  listArchived = async (req, res) => {
    const { categoryId } = req.query;
    res.json(await this.svc.listArchived(categoryId || null));
  };

  get = async (req, res) => {
    const n = await this.svc.get(req.params.id);
    return n ? res.json(n) : res.sendStatus(404);
  };
  update = async (req, res) => {
    const n = await this.svc.update(req.params.id, req.body);
    return n ? res.json(n) : res.sendStatus(404);
  };
  archive = async (req, res) => {
    const n = await this.svc.archive(req.params.id);
    return n ? res.json(n) : res.sendStatus(404);
  };
  unarchive = async (req, res) => {
    const n = await this.svc.unarchive(req.params.id);
    return n ? res.json(n) : res.sendStatus(404);
  };
  remove = async (req, res) => {
    const count = await this.svc.remove(req.params.id);
    return count ? res.sendStatus(204) : res.sendStatus(404);
  };

  addCategory = async (req, res) => {
    const { id } = req.params;
    const { categoryId } = req.body;
    const n = await this.svc.addCategory(id, categoryId);
    return n ? res.json(n) : res.sendStatus(404);
  };

  removeCategory = async (req, res) => {
    const { id, categoryId } = req.params;
    const n = await this.svc.removeCategory(id, categoryId);
    return n ? res.sendStatus(204) : res.sendStatus(404);
  };
}
