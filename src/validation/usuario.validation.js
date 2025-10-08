import Joi from "joi";

/* VALIDACIÓN CORREO */
function validateEmailStructure(value, helpers) {
  const allowedDomains = ["gmail.com", "hotmail.com", "outlook.com"];
  const domain = value.split("@")[1];
  if (!allowedDomains.includes(domain)) {
    return helpers.message(`El dominio "${domain}" no está permitido.`);
  }
  return value;
}

/* REGISTRO DE USUARIO */
export const registerValidation = Joi.object({
  nombre: Joi.string()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .required()
    .messages({
      "string.base": "El nombre debe ser un texto.",
      "string.empty": "El nombre es obligatorio.",
      "string.min": "El nombre debe tener al menos 2 caracteres.",
      "string.max": "El nombre no puede tener más de 50 caracteres.",
      "string.pattern.base": "El nombre solo puede contener letras y espacios.",
    }),

  apellido: Joi.string()
    .min(2)
    .max(50)
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
    .required()
    .messages({
      "string.base": "El apellido debe ser un texto.",
      "string.empty": "El apellido es obligatorio.",
      "string.min": "El apellido debe tener al menos 2 caracteres.",
      "string.max": "El apellido no puede tener más de 50 caracteres.",
      "string.pattern.base": "El apellido solo puede contener letras y espacios.",
    }),

  email: Joi.string()
    .email({ tlds: false })
    .min(10)
    .max(100)
    .required()
    .custom(validateEmailStructure, "Validación personalizada")
    .messages({
      "string.email": "Debes ingresar un correo electrónico válido.",
      "string.min": "El correo debe tener al menos 10 caracteres.",
      "string.max": "El correo no puede tener más de 100 caracteres.",
      "string.empty": "El correo electrónico es obligatorio.",
      "any.required": "El correo electrónico es obligatorio.",
    }),

  password: Joi.string()
    .min(8)
    .max(26)
    .required()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/)
    .messages({
      "string.empty": "La contraseña es obligatoria.",
      "any.required": "La contraseña es obligatoria.",
      "string.min": "La contraseña debe tener al menos 8 caracteres.",
      "string.max": "La contraseña debe tener como máximo 26 caracteres.",
      "string.pattern.base":
        "La contraseña debe incluir al menos una mayúscula, una minúscula y un número.",
    }),

  telefono: Joi.string()
    .pattern(/^[0-9]{9}$/)
    .required()
    .messages({
      "string.empty": "El número de teléfono es obligatorio.",
      "string.pattern.base":
        "El teléfono debe contener solo números y tener entre 8 y 15 dígitos.",
    }),

  direccion: Joi.string()
    .min(5)
    .max(100)
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s\#\.\,\-º]+$/)
    .required()
    .messages({
      "string.empty": "La dirección es obligatoria.",
      "string.min": "La dirección debe tener al menos 5 caracteres.",
      "string.max": "La dirección no puede exceder los 100 caracteres.",
      "string.pattern.base": "La dirección contiene caracteres inválidos.",
    }),

  rol: Joi.string()
    .valid("admin", "usuario", "moderador")
    .default("usuario")
    .messages({
      "any.only": "El rol debe ser 'admin', 'usuario' o 'moderador'.",
    }),
})
  .unknown(false)
  .messages({
    "object.unknown": "No se permiten campos adicionales.",
  });

/* INICIO DE SESIÓN */
export const loginValidation = Joi.object({
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
      "string.email": "El correo electrónico debe ser válido.",
      "string.empty": "El correo electrónico es obligatorio.",
      "any.required": "El correo electrónico es obligatorio.",
    }),

  password: Joi.string().min(8).max(26).required().messages({
    "string.empty": "La contraseña es obligatoria.",
    "any.required": "La contraseña es obligatoria.",
    "string.min": "La contraseña debe tener al menos 8 caracteres.",
    "string.max": "La contraseña debe tener como máximo 26 caracteres.",
  }),
})
  .unknown(false)
  .messages({
    "object.unknown": "No se permiten campos adicionales.",
  });
