import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

// USER TASKS

export const loginUserTask = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ primer_correo: email }).populate("rol");
  if (!user)
    return res.status(400).json({ error: "No se pudo encontrar el usuario." });
  const matchPass = await User.comparePassword(password, user.password)
  if (!matchPass)
    return res.status(401).json({ error: "Contraseña invalida." })
  const token = jwt.sign({ id: user._id }, config.secretKEY, {
    expiresIn: 86400,
  });
  res.status(200).json(user);
};

export const logout = async (req, res) => {
  res.json("logout");
};

export const registerUsersTask = async (req, res) => {
  console.log(req.body)
  const newUser = new User({
    dni: req.body.dni,
    nombre: req.body.nombre,
    primer_correo: req.body.primer_correo,
    password: await User.encryptPassword(req.body.password),
    telefono: req.body.telefono,
    direccion: req.body.direccion,
  });
  const role = await Role.find({ nombre: { $in: req.body.rol } });
  newUser.rol = role.map((rol) => rol._id);
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado con exito." });
};

export const userInfoTask = async (req, res) => {
  const user = await User.findById(req.params.id).populate("rol");
  res.json(user)
}