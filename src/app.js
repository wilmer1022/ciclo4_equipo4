import express from "express";
import morgan from "morgan";

import DeliveryRoutes from "./routes/delivery.routes";
import UserRoutes from "./routes/user.routes";

import config from "./config";
import { createRoles } from "./libs/initialSetup";

const cors = require("cors");
const app = express();
createRoles();

// settings
app.set("port", process.env.PORT || 4000);

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

// routes
app.use("/api/envio", DeliveryRoutes);
app.use("/api/envio", UserRoutes);

export default app;
