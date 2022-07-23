import { Router } from "express";
import {
  deleteTasks,
  getTask,
  getTasks,
  getTasksCount,
  saveTasks,
  updateTasks,
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags: 
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all tasks
 *    tags: [Tasks]
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get total tasks counter
 *    tags: [Tasks]
 */
router.get("/tasks/count", getTasksCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get a task by id
 *    tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Save a new task
 *    tags: [Tasks]
 */
router.post("/tasks", saveTasks);

/**
 * @swagger
 * /tasks:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTasks);

/**
 * @swagger
 * /tasks:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 */
router.put("/tasks/:id", updateTasks);

export default router;
