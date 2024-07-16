import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  increment,
  QuantityMinus,
  QuantityPlus,
  totalPrice,
  totalItem,
  deleteItemfromCart,
  deleteAllFromCart,
} from "../redux/actions";
import "./about.css";
import { baseUrl, baseUrlCreateOrder } from "../config/config";

const About = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const duplicateValues = (id) => {
    return data?.productList.filter((value) => value.id === id);
    // const duplicates = data.productList.filter(
    //   (item, index) => data.productList.indexOf(item) !== index
    // );
    // console.log(duplicates);
  };

  // const update = (id, item) => {
  //   const arr = duplicateValues(id);
  //   console.log("arr", arr);
  //   const len = arr.length;
  //   item.price *= len;
  //   setCount({ id: len });
  //   console.log(item);
  // };

  const handlePlus = (item) => {
    dispatch(QuantityPlus(item));
    dispatch(totalPrice());
    dispatch(totalItem());
    // dispatch(checkOutItems(item));
  };
  const handleMinus = (item) => {
    dispatch(QuantityMinus(item));
    dispatch(totalPrice());
    dispatch(totalItem());
  };

  const handleCheckOut = () => {
    navigate("/checkOut");
  };

  const payment = (price) => {
    var price = price;
    console.log("Payment started..", price);
    if (price == "") {
      alert("Add items to cart");
    }

    $.ajax({
      url: baseUrlCreateOrder,
      data: JSON.stringify({ amount: data.totalPrice, info: "request_info" }),
      contentType: "application/json",
      type: "POST",
      dataType: "json",
      success: function (response) {
        console.log("response", response);
        if (response.status == "created") {
          let options = {
            key: "rzp_test_uUUpZhisIywk8A",
            amount: response.amount,
            currency: "INR",
            name: "Rudrika Singh",
            description: "Donation",
            order_id: response.id,
            handler: function (response) {
              console.log(response.razorpay_payment_id);
              console.log(response.razorpay_order_id);
              console.log(response.razorpay_signature);
              console.log("payment successfull !!");
              alert("congrats!! Payment successful ");
            },
            prefill: {
              name: "",
              email: "",
              contact: "",
            },
            notes: {
              address: "Delhi",
            },
            theme: {
              color: "#3399cc",
            },
          };

          let rzp = new Razorpay(options);
          rzp.on("payment.failed", function (response) {
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.code);
            console.log(response.error.metadata.payment_id);
            alert("Payment failed!");
          });
          rzp.open(); //form open
        }
      },
      error: function (error) {
        console.log("error", error);
        alert("something went wrong!!");
      },
    });
  };

  useEffect(() => {
    dispatch(totalPrice());
    dispatch(totalItem());
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <br />
        <div className="cart">
          <div className="cartItems">
            {data?.productList.map((item) => {
              return (
                <div className="card">
                  <div className="cart_info">
                    <h2>{item.name}</h2>
                    <p>Price: {item.price * item.quantity}</p>
                    <p>Rating: {item.rating}</p>
                    <div>
                      <button
                        className="deleteItem"
                        onClick={() => dispatch(deleteItemfromCart(item.id))}
                      >
                        Delete Item
                      </button>
                    </div>
                  </div>
                  <div className="cart_buttons">
                    <button onClick={() => handlePlus(item.id)}>+</button>
                    <div>{item.quantity}</div>
                    <button onClick={() => handleMinus(item.id)}>-</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cartTotal">
            <p>Total Items : {data.totalItem}</p>
            <p>Total Price : {data.totalPrice} </p>

            <button onClick={() => payment(data.totalPrice)}>Check Out</button>
            <button onClick={() => dispatch(deleteAllFromCart())}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
