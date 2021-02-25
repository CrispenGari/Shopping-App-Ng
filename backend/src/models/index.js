import mongoose from "mongoose";

const products = "Products";
const basket = "UserBasket";

const ProductsSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  img: String,
});

const UserBasket = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  img: String,
});

const productModel = mongoose.model(products, ProductsSchema);
const basketModel = mongoose.model(basket, UserBasket);
const models = {
  productModel,
  basketModel,
};

export default models;
