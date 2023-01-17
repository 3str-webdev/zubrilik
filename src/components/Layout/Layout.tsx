import React from "react";
import Content from "./Content";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="react-layout">
      <Header />
      <Content footer={true}>{children}</Content>
    </div>
  );
};

export default Layout;
