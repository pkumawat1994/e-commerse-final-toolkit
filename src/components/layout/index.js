import { useSelector } from "react-redux";
import BreadCrumb from "../BreadCrumb";
import AdminFooter from "./adminFooter/AdminFooter";
import AdminHeader from "./adminHeader/AdminHeader";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
  // let userToken = localStorage.getItem("userToken");
  let admintoken = localStorage.getItem("adminToken");
  const { token } = useSelector((state) => state?.AuthSlice);
  const { adminToken } = useSelector((state) => state?.AdminAuthSlice);
  console.log("adminToken", adminToken);
  console.log("tokenn", token);

  return (
    <>
      {admintoken ? <AdminHeader /> : <Header />}
      {token ? <BreadCrumb /> : null}
      {children}
      {admintoken ? <AdminFooter /> : <Footer />}
    </>
  );
};

export default Layout;
