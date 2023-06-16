import Link from "next/link";
import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import styles from "./GoBackBtn.module.css";

const GoBackBtn = ({ children, href }) => {
  return (
    <Link className={styles.link} href={href}>
      <BsArrowLeftSquareFill />
      {children}
    </Link>
  );
};

export default GoBackBtn;
