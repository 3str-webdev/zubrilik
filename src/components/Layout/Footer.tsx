import React from "react";
import GitHubLink from "../GitHubLink/GitHubLink";

interface IProps {}

const Footer: React.FC<IProps> = () => {
  return (
    <footer className="react-footer">
      <GitHubLink url="https://github.com/3str-webdev/zubrilik" />
    </footer>
  );
};

export default Footer;
