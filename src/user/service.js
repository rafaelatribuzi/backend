import User from "../database/schema/user.js";



const fetchService = async (req, res)=> {
    const user = await User.create ({
    email: "tes4@gmail.com", 
    password: "123",
    }); 

    return user;
   
};

const createService = async (body)=> {
    const user = await User.create(body);
    return user;
};

const authService = async (body)=> {
  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });

  if (user == null) {
  return {error: true, message: "Dados Inválidos", statusCode: 400};
  }

  return user;
};


    export{fetchService, authService, createService};