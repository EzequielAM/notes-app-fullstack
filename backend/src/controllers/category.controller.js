export default class CategoryController {
  constructor(service) {
    this.svc = service;
  }
  create = async (req, res) =>
    res.status(201).json(await this.svc.create(req.body));
  list = async (_req, res) => res.json(await this.svc.list());
  remove = async (req, res) => {
    await this.svc.remove(req.params.id);
    res.sendStatus(204);
  };
}
