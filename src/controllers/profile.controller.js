// src/controllers/profile.controller.js
import { AppDataSource } from "../config/configDb.js";
import { User } from "../entities/user.entity.js";
import bcrypt from "bcryptjs";
import { handleSuccess, handleErrorClient, handleErrorServer } from "../Handlers/responseHandlers.js";

export async function getPublicProfile(req, res) {
  handleSuccess(res, 200, "Perfil público obtenido exitosamente", {
    message: "¡Hola! Este es un perfil público. Cualquiera puede verlo.",
  });
}

export async function getPrivateProfile(req, res) {
  const user = req.user;
  handleSuccess(res, 200, "Perfil privado obtenido exitosamente", {
    message: `¡Hola, ${user.email}! Este es tu perfil privado. Solo tú puedes verlo.`,
    userData: { id: user.id, email: user.email },
  });
}

// Actualizar el perfil
export async function updatePrivateProfile(req, res) {
  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: req.user.id });

    if (!user) return handleErrorClient(res, 404, "Usuario no encontrado");

    const { email, password } = req.body;
    if (!email && !password)
      return handleErrorClient(res, 400, "Debes enviar email y/o password para actualizar");

    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);

    await userRepo.save(user);
    handleSuccess(res, 200, "Perfil actualizado exitosamente", { id: user.id, email: user.email });
  } catch (err) {
    handleErrorServer(res, 500, "Error al actualizar perfil", err.message);
  }
}

// Eliminar el perfil
export async function deletePrivateProfile(req, res) {
  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({ id: req.user.id });

    if (!user) return handleErrorClient(res, 404, "Usuario no encontrado");

    await userRepo.delete({ id: user.id });
    handleSuccess(res, 200, "Cuenta eliminada exitosamente", { id: user.id });
  } catch (err) {
    handleErrorServer(res, 500, "Error al eliminar perfil", err.message);
  }
}
