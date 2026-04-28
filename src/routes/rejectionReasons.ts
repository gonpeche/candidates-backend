import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const REASONS_FILE = path.resolve(__dirname, "../data/rejection-reasons.json");

export function loadReasons(): string[] {
  return JSON.parse(fs.readFileSync(REASONS_FILE, "utf-8")) as string[];
}

export function saveReasons(reasons: string[]): void {
  fs.writeFileSync(REASONS_FILE, JSON.stringify(reasons, null, 2));
}

router.get("/", (_req, res) => {
  res.json({ reasons: loadReasons() });
});

export default router;
