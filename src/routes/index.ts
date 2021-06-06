import { Router } from "express";
import express from "express";

const router = Router();
const apiRoute = Router();

//middlewares
apiRoute.use(express.json());

//routes

router.use("/api", apiRoute);

export default router;
