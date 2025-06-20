import express, { request } from "express"; //lembrar de instalar o express - npm i express

import cors from "cors"; //lembrar de instalar o express - npm i cors
import { piadas } from "./mock.js";
import { connectToMongo } from "./database/index.js";
import User from "./database/schema/user.js";
import { userRouter } from "./router.js";
userRouter


const app = express();
connectToMongo();

app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);

app.use(express.json());

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

app.get("/batata", (req, res)=> {
  res.status(200).send({batata: true});
});



app.get("/piadas", (req, res)=> {
  const randomNum = getRandomInt(piadas.length);
  return res.status(200).send({piada: piadas[randomNum]});
});

app.use("/user", userRouter);

app.listen("3000");

export default app;




