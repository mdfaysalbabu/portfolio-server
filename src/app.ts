import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorhandler from "./app/middlewares/globalErrorhandler";
import { notFountRoute } from "./app/middlewares/notFountRoute";

const app: Application = express();

// parser
app.use(
  cors({
    origin: [
      "https://portfolio-dashboard-nine-sand.vercel.app",
      "http://localhost:3000",
      "https://my-portfolio-ecru-xi.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1", router);

app.get("/", async (req: Request, res: Response) => {
  res.send("Portfolio Running");
});

app.use(globalErrorhandler);
app.use(notFountRoute);

export default app;
