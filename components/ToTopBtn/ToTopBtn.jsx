import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import styles from "./ToTopBtn.module.css";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = throttle(() => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 300);

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [isVisible]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  styles;
  return (
    <div
      className={isVisible ? styles.visible : styles.toTop}
      onClick={handleClick}
    >
      <p className={styles.icon}>UP</p>
    </div>
  );
};

export default ToTopBtn;
