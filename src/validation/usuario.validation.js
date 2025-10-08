import Joi from "joi";

/* VALIDACIÓN DE REGISTRO */
export const registerValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .min(10)
    .max(255)
    .messages({
      "string.email": "Debes ingresar un correo electrónico válido.",
      "string.min": "El correo debe tener al menos 10 caracteres.",
      "string.max": "El correo no puede tener más de 255 caracteres.",
      "string.empty": "El correo electrónico es obligatorio.",
      "any.required": "El correo electrónico es obligatorio.",
    }),
  password: Joi.string()
    .min(8)
    .max(255)
    .required()
    .messages({
      "string.empty": "La contraseña es obligatoria.",
      "any.required": "La contraseña es obligatoria.",
      "string.min": "La contraseña debe tener al menos 8 caracteres.",
      "string.max": "La contraseña debe tener como máximo 255 caracteres.",
    }),
})
  .unknown(false)
  .messages({
    "object.unknown": "No se permiten campos adicionales.",
  });

/* VALIDACIÓN DE LOGIN */
export const loginValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
      "string.email": "El correo electrónico debe ser válido.",
      "string.empty": "El correo electrónico es obligatorio.",
      "any.required": "El correo electrónico es obligatorio.",
    }),
  password: Joi.string()
    .min(8)
    .max(255)
    .required()
    .messages({
      "string.empty": "La contraseña es obligatoria.",
      "any.required": "La contraseña es obligatoria.",
      "string.min": "La contraseña debe tener al menos 8 caracteres.",
      "string.max": "La contraseña debe tener como máximo 255 caracteres.",
    }),
})
  .unknown(false)
  .messages({
    "object.unknown": "No se permiten campos adicionales.",
  });
