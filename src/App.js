import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import InputField from "./components/InputField";
import Layout from "./components/layout";
import AllRoutes from "./routes";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Layout>
        <AllRoutes />
      </Layout>
    </>
  );
}

export default App;
