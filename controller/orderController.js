import orderModel from "../model/orderModel.js";

export const allOrderController = async(req,res)=>{
    try{
        const {user_id,order_item,address} = req.body;
        if(!user_id){
            return res.status(401).send({message: "Name is required"});
        }
        if(!order_item){
            return res.status(401).send({message: "Image is required"});
        }
        if(!address){
            return res.status(401).send({message: "Image is required"});
        }
        const order = await new orderModel({
            user_id,
            order_item,
            address,

        }).save();
        res.status(201).send({
            success: true,
            message: "new new order placed",
            order,
          });
    }catch(e){
        console.log("error", e);
        res.status(500).send({
            success: false,
            error,
            message: "error in order",
          });
       

    }
}

export const updateorder = async (req,res)=>{
    try {
        const _id = req.perams;
        const {phone,address,email} = req.body;

        const order = await orderModel.findOne({_id});

        if(!order){
            res.status(401).send({
                succes :false,
                message:"No such Order"

            })
        }else{
            const orderupdate = await orderModel.findByIdAndUpdate(
                order._id,
                {phone,address,email },
                { new: true },
                res.status(201).send({
                    success:true,
                    message:'order update successfully'
                })
              )
        }

    } catch (error) {

        res.status(401).send({
                succes :false,
                error: error,

            })
    }
}