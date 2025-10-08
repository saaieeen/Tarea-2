// src/controllers/notas.controller.js
import {
  findNotas,
  findNotaById,
  createNota,
  updateNota,
  deleteNota,
} from "../services/notas.services.js";
import { handleSuccess, handleErrorClient, handleErrorServer } from "../Handlers/responseHandlers.js";


export class NotasController {
  // Obtener todas las notas
  async getAllNotas(req, res) {
    try {
      const notas = await findNotas();
      handleSuccess(res, 200, "Notas obtenidas exitosamente", notas);
    } catch (error) {
      handleErrorServer(res, 500, "Error al obtener las notas", error.message);
    }
  }

  // Obtener nota por ID
  async getNotaById(req, res) {
    try {
      const idNum = Number(req.params.id);
      if (isNaN(idNum)) return handleErrorClient(res, 400, "ID de nota inválido");

      const nota = await findNotaById(idNum);
      if (!nota) return handleErrorClient(res, 404, "Nota no encontrada");

      handleSuccess(res, 200, "Nota obtenida exitosamente", nota);
    } catch (error) {
      handleErrorServer(res, 500, "Error interno al obtener la nota", error.message);
    }
  }

  // Crear nueva nota
  async createNota(req, res) {
    try {
      const data = req.body;

      if (!data || Object.keys(data).length === 0) {
        return handleErrorClient(res, 400, "Datos de la nota son requeridos");
      }

      // Validación de campos específicos
      if (!data.title || !data.content) {
        return handleErrorClient(res, 400, "Title y content son requeridos");
      }

      const nuevaNota = await createNota(data);
      handleSuccess(res, 201, "Nota creada exitosamente", nuevaNota);
    } catch (error) {
      handleErrorServer(res, 500, "Error al crear la nota", error.message);
    }
  }

  // Actualizar nota
  async updateNota(req, res) {
    try {
      const idNum = Number(req.params.id);
      if (isNaN(idNum)) return handleErrorClient(res, 400, "ID de nota inválido");

      const changes = req.body;
      if (!changes || Object.keys(changes).length === 0) {
        return handleErrorClient(res, 400, "Datos para actualizar son requeridos");
      }

      const notaActualizada = await updateNota(idNum, changes);
      if (!notaActualizada) return handleErrorClient(res, 404, "Nota no encontrada");

      handleSuccess(res, 200, "Nota actualizada exitosamente", notaActualizada);
    } catch (error) {
      handleErrorServer(res, 500, "Error interno al actualizar la nota", error.message);
    }
  }

  // Eliminar nota
  async deleteNota(req, res) {
    try {
      const idNum = Number(req.params.id);
      if (isNaN(idNum)) return handleErrorClient(res, 400, "ID de nota inválido");

      const nota = await findNotaById(idNum);
      if (!nota) return handleErrorClient(res, 404, "Nota no encontrada");

      await deleteNota(idNum);
      handleSuccess(res, 200, "Nota eliminada exitosamente", { id: idNum });
    } catch (error) {
      handleErrorServer(res, 500, "Error interno al eliminar la nota", error.message);
    }
  }
}
