import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import cors from "cors";
import { handleDemo } from "../server/routes/demo";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get("/api/ping", (req, res) => {
  res.json({ message: "Yatri API is running on Vercel!" });
});

app.get("/api/demo", handleDemo);

// Export the Express app as a Vercel function
export default (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};
