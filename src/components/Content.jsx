import React, { useState } from "react";
import { vid } from "../assets/image";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/actions";
import { decrement } from "../redux/actions";
import { baseUrl, baseUrlAddProducts } from "../config/config";

const Content = () => {
  const inc = useSelector((state) => state.inc);
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    id: "",
    name: "",
    price: "",
    rating: "",
    quantity: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(info));
    try {
      await fetch(baseUrlAddProducts, {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  console.log(info);

  return (
    <>
      <div className="content">
        <div className="left">
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <label>Product name</label>
              <input
                type="text"
                value={info.name}
                name="name"
                onChange={handleChange}
              />

              <label>Product ID</label>
              <input
                type="number"
                value={info.id}
                name="id"
                onChange={handleChange}
              />

              <label>Price</label>
              <input
                type="number"
                value={info.price}
                name="price"
                onChange={handleChange}
              />

              <label>Rating</label>
              <input
                type="number"
                value={info.rating}
                name="rating"
                onChange={handleChange}
              />

              <label>Quantity</label>
              <input
                type="number"
                value={info.quantity}
                name="quantity"
                onChange={handleChange}
              />

              <label>Submit</label>
              <input type="submit" />
            </form>
          </div>
        </div>
        <div className="right">
          <div>
            {inc.isData}
            <button onClick={() => dispatch(increment(5))}>INC</button>
          </div>

          <div>
            <button onClick={() => dispatch(decrement(5))}>DEC</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
