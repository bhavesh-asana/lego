import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from 'axios'
import './product.css'
import { setProducts } from "../redux/actions/productAction";
import ProductComponents from "./ProductComponents";
const ProductListning = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://dummyjson.com/products")
      .catch((err) => {
        console.log("errr", err);
      });
    dispatch(setProducts(response.data.products));
    console.log('responseee',response.data.products)
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('product',products)
  return <div>
    <ProductComponents/>
  </div>;
};

export default ProductListning;
