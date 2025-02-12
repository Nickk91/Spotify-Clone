import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("BLA BLA BLA");
});

export default router;
