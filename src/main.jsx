import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from "./App";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import CheckOut from "./components/CheckOut.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/checkOut",
    element: <CheckOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
