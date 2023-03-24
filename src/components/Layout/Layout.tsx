import React from "react";
import NavBar from "../Navbar/Navbar";

const Layout: React.FC = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
