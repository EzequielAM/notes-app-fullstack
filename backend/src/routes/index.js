import { Router } from "express";
import { models } from "../config/db.js";

import NoteRepository from "../repositories/note.repository.js";
import NoteService from "../services/note.service.js";
import NoteController from "../controllers/note.controller.js";
import NoteRouter from "./note.routes.js";

import CategoryRepository from "../repositories/category.repository.js";
import CategoryService from "../services/category.service.js";
import CategoryController from "../controllers/category.controller.js";
import CategoryRouter from "./category.routes.js";

const router = Router();

// Notes
const noteRepo = new NoteRepository(models);
const noteSvc = new NoteService(noteRepo, models);
const noteCtrl = new NoteController(noteSvc);
router.use("/notes", NoteRouter(noteCtrl));

// Categories
const catRepo = new CategoryRepository(models);
const catSvc = new CategoryService(catRepo);
const catCtrl = new CategoryController(catSvc);
router.use("/categories", CategoryRouter(catCtrl));

export default router;
