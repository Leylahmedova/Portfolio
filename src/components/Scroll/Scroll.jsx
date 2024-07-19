import React, { useState } from "react";
import Styles from "./scroll.module.scss";
import { FaArrowUp } from "react-icons/fa6";
const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className={
        visible
          ? `${Styles.showScroll} ${Styles.scroll_top}`
          : `${Styles.scroll_top}`
      }
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </div>
  );
};

export default Scroll;
