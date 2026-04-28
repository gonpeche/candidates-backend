import cors from "cors";
import express from "express";
import candidatesRouter from "./routes/candidates";
import columnsRouter from "./routes/columns";
import rejectionReasonsRouter from "./routes/rejectionReasons";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/candidates", candidatesRouter);
app.use("/columns", columnsRouter);
app.use("/rejection-reasons", rejectionReasonsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
