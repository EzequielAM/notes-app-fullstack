import { Router } from "express";
export default function CategoryRouter(ctrl) {
  const r = Router();
  r.get("/", ctrl.list);
  r.post("/", ctrl.create);
  r.delete("/:id", ctrl.remove);
  return r;
}
