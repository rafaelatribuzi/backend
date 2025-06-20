import { response } from "express";
import User from "../database/schema/user.js";
import { authService, createService, fetchService } from "./service.js";

const userfetchController = async (req, res)=> {  // barra fetch é buscar
  const user = await fetchService(req, res);
  return res.status(200).send({batata: true, user: user});
};

const usercreateController = async (req, res)=> {
  const user = await createService (req.body);
  return res.status(200).send({working: true, user: user});
};

const userauthController = async (req, res)=> {
  const serviceResponse = await authService (req.body);
  if(serviceResponse?.error) {
    return res
    .status (serviceResponse.statusCode)
    .send ({ error: true, message: serviceResponse.message});
  }
  
  
  return res.status(200).send({working: true, user: serviceResponse});
};

export{userauthController, userfetchController, usercreateController};