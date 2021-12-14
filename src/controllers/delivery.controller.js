import User from "../models/Delivery";

// USER TASKS

export const loginUserTask = async (req, res) => {
  const user = await User.find({
    $and: [{ email: req.body.email }, { password: req.body.password }],
  });
  res.json(user);
};

export const registerUsersTask = async (req, res) => {
  const newUser = new User({
    dni: req.body.dni,
    nombre: req.body.nombre,
    primer_correo: req.body.correo.primer_correo,
    password: req.body.password,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    rol: req.body.rol,
  });
  const userSaved = await newUser.save();
  res.json(userSaved);
};
