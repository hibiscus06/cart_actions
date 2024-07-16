import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./product.css";
import { useDispatch } from "react-redux";
import { addProduct, totalItem } from "../redux/actions";
import {
  baseUrl,
  baseUrlAddProducts,
  baseUrlGetProducts,
} from "../config/config";
import Footer from "./Footer";

const Projects = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const res = await fetch(baseUrlGetProducts);
    const result = await res.json();
    if (res.status === 200) {
      setData(result);
    }
  };

  useEffect(() => {
    fetchData();
    dispatch(totalItem());
  }, []);

  const handleAddProduct = (item) => {
    dispatch(addProduct(item));
    dispatch(totalItem());
  };

  return (
    <>
      <div className="projects">
        <Navbar />
        <br />
        {data.map((item, index) => {
          return (
            <div className="productCard">
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Rating: {item.rating}</p>

              <button onClick={() => handleAddProduct(item)}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Projects;
