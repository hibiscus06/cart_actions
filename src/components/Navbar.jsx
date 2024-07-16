import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { totalItem } from "../redux/actions";

const Navbar = () => {
  const loc = useLocation();
  const data = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalItem);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">{/* <img src={logo} alt="logo" /> */}</div>

        <ul className="nav">
          <li className="nav-list">
            <Link
              to="/"
              className={loc.pathname === "/" ? "selected" : "not-selected"}
            >
              Home
            </Link>
          </li>

          <li className="nav-list">
            <Link
              to="/contact"
              className={
                loc.pathname === "/contact" ? "selected" : "not-selected"
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="/projects"
              className={
                loc.pathname === "/projects" ? "selected" : "not-selected"
              }
            >
              Products
            </Link>
          </li>
          <li className="nav-list">
            <Link
              to="/about"
              className={
                loc.pathname === "/about" ? "selected" : "not-selected"
              }
            >
              Cart {data.totalItem}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
