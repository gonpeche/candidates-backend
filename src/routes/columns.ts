import { Router } from "express";
import fs from "fs";
import path from "path";
import { columns } from "../store";
import type { ColumnVisibilityMap } from "../types";

const router = Router();
const COLUMNS_FILE = path.resolve(__dirname, "../data/columns.json");

router.get("/", (_req, res) => {
  res.json(columns);
});

router.put("/", (req, res) => {
  const update = req.body as ColumnVisibilityMap;
  update.id = false;
  Object.assign(columns, update);
  fs.writeFileSync(COLUMNS_FILE, JSON.stringify(columns, null, 2));
  res.json(columns);
});

export default router;
