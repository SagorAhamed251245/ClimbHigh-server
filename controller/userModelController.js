import userModel from "../model/userModel.js";
import JWT from 'jsonwebtoken'

export const loginController = async (req, res) => {
    const email = req.params.email;
    
        const result = await userModel.findOne({ email: email });
    res.send(result);
    
} 

export const singUpController = async(req, res)=>{
    console.log(req.body);

    const {email,name} = req.body;
    


    let user = await userModel.findOne({email});
    if(!user){
        user = await new userModel({
            name,
            email,
        }).save();
    }
    console.log(user._id);




    res.status(200).send({
        success: true,
        message: "Loging successfully",
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
           
        },
       
    });
}