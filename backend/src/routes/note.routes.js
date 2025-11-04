import { Router } from "express";
export default function NoteRouter(ctrl) {
  const r = Router();
  r.get("/", ctrl.listActive);
  r.get("/archived", ctrl.listArchived);
  r.get("/:id", ctrl.get);
  r.post("/", ctrl.create);
  r.put("/:id", ctrl.update);
  r.post("/:id/archive", ctrl.archive);
  r.post("/:id/unarchive", ctrl.unarchive);

  // categorías
  r.post("/:id/categories", ctrl.addCategory); // body: { categoryId }
  r.delete("/:id/categories/:categoryId", ctrl.removeCategory);

  r.delete("/:id", ctrl.remove);
  return r;
}
