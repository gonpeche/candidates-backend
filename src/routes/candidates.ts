import { Router } from "express";
import { candidates } from "../store";
import { loadReasons, saveReasons } from "./rejectionReasons";

const router = Router();

router.get("/", (_req, res) => {
  res.json(candidates);
});

router.patch("/:id", (req, res) => {
  const { reasons, newReason } = req.body as { reasons: string[]; newReason?: string };

  if (!Array.isArray(reasons)) {
    res.status(400).json({ error: '"reasons" must be an array' });
    return;
  }

  const candidate = candidates.find((c) => c.id === req.params.id);
  if (!candidate) {
    res.status(404).json({ error: "Candidate not found" });
    return;
  }

  if (newReason && typeof newReason === "string") {
    const existing = loadReasons();
    if (!existing.includes(newReason)) {
      saveReasons([...existing, newReason]);
    }
  }

  candidate.reason = reasons.join(", ");
  res.json(candidate);
});

export default router;
