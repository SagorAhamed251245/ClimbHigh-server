import userModel from "../model/userModel.js";
import JWT from 'jsonwebtoken'

export const loginController = async(req, res)=>{
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

    const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "1h",
    });

    const ref_token = await JWT.sign({_id: user._id}, process.env.JWT_REFRESS_SECRET_TOKEN, {
        expiresIn: "1y",
    });


    res.status(200).send({
        success: true,
        message: "Loging successfully",
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
           
        },
        token,
        ref_token,
    });
}