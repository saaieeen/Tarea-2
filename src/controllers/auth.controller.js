import { loginUser } from "../services/auth.service.js";
import { createUser } from "../services/user.service.js";
import { handleSuccess, handleErrorClient, handleErrorServer } from "../Handlers/responseHandlers.js";
import { registerValidation, loginValidation } from "../validation/usuario.validation.js";



export async function login(req, res) {
  
  const { error, value } = loginValidation.validate(req.body, { abortEarly: false });
  if (error) {
    const messages = error.details.map(d => d.message).join(", ");
    return handleErrorClient(res, 400, messages);
  }

  const data = await loginUser(value.email, value.password);
  handleSuccess(res, 200, "Login exitoso", data);
}


export async function register(req, res) {
  try {
    const { error, value } = registerValidation.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map(d => d.message).join(", ");
      return handleErrorClient(res, 400, messages);
    }
    
    const newUser = await createUser(value);
    delete newUser.password;
    handleSuccess(res, 201, "Usuario registrado exitosamente", newUser);
  } catch (error) {
    if (error.code === '23505') {
      handleErrorClient(res, 409, "El email ya está registrado");
    } else {
      handleErrorServer(res, 500, "Error interno del servidor", error.message);
    }
  }
}
