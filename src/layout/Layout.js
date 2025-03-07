import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./footer/Index";
import Header from "./header/Index";
import ScrollTopButton from "./ScrollTopButton";
import Header4 from "./header/Header4";
const Layout = ({ children, header }) => {
  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <Preloader /> */}
        {/* <Header header={header} /> */}
        <Header4/>
        {children}
        {/* footer area start */}
        <Footer />
        {/* footer area end */}
        {/* Scroll Top Button */}
        <ScrollTopButton />
      </div>
    </Fragment>
  );
};
export default Layout;
