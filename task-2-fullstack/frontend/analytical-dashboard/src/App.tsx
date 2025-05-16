import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },

      {
        path: "/customers",
        Component: Customer,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
