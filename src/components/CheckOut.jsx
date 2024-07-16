import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./checkOut.css";

const CheckOut = () => {
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      <div>
        {data?.checkOutList.map((item) => {
          return (
            <div className="card">
              <h2>{item.name}</h2>
              <p>Price: {item.price * item.quantity}</p>
              <p>Rating: {item.rating}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button>Proceed to pay</button>
      </div>
    </>
  );
};

export default CheckOut;
