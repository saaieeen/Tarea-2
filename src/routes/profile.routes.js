// src/routes/profile.routes.js
import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import {
  getPublicProfile,
  getPrivateProfile,
  updatePrivateProfile,
  deletePrivateProfile,
} from "../controllers/profile.controller.js";

const router = Router();

router.get("/public", getPublicProfile);

// Rutas privadas
router.get("/private", authMiddleware, getPrivateProfile);
router.patch("/private", authMiddleware, updatePrivateProfile);
router.delete("/private", authMiddleware, deletePrivateProfile);

export default router;
