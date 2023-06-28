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
    const products = await productModel.find();
    const randomProducts = shuffleArray(products);
    res.send(randomProducts);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the products.");
  }
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


