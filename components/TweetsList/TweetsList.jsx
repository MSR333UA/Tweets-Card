"use client";

import React, { useState } from "react";
import styles from "./TweetsList.module.css";
import TweetCard from "../TweetCard/TweetCard";

const TweetsList = () => {
  const [page, setPage] = useState(1);

  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <TweetCard />
        </li>
      </ul>

      <button className={styles.btn} type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};

export default TweetsList;
