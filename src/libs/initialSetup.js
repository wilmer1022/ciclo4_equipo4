import Role from "../models/Role";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    await Promise.all([
      new Role({ nombre: "usuario" }).save(),
      new Role({ nombre: "administrador" }).save(),
      new Role({ nombre: "repartidor" }).save(),
    ]);
  } catch (error) {
    console.log(error);
  }
};
