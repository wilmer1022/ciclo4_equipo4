import express from "express";
import DeliveryRoutes from "./routes/delivery.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);

app.use(express.json());

// routes
app.use("/api/envio", DeliveryRoutes);

export default app;
