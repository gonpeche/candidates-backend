import fs from "fs";
import path from "path";
import candidatesData from "./data/candidates.json";
import type { Candidate, ColumnVisibilityMap } from "./types";

export const candidates: Candidate[] = candidatesData as Candidate[];

// Load via fs so ts-node-dev doesn't watch this file and restart on writes
export const columns: ColumnVisibilityMap = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./data/columns.json"), "utf-8")
) as ColumnVisibilityMap;
