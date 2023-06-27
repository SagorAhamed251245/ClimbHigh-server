import productModel from "../model/productModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock, img, images, size } =
      req.body;

    const product = await new productModel({
      name,
      description,
      price,
      category,
      stock,
      img,
      images,
      size,
    }).save();
    res.status(201).send({
      success: true,
      message: "new product created",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the product.");
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const result = await productModel.find();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding the product.");
  }
};
