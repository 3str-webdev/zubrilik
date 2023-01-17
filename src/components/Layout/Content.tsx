import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

interface ContentProps {
  children: React.ReactNode;
  footer?: boolean;
}

const Content: React.FC<ContentProps> = ({ children, footer = false }) => {
  const location = useLocation().pathname;
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (contentRef.current) contentRef.current.scroll({ top: 0 });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <section className="react-content">
      <div className="wrapper" ref={contentRef}>
        <div className="react-content-wrapper">{children}</div>
        {footer && <Footer />}
      </div>
    </section>
  );
};

export default Content;
