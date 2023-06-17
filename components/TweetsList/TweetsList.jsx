"use client";

import React, { useState } from "react";
import styles from "./TweetsList.module.css";
import TweetCard from "../TweetCard/TweetCard";
import { useSelector } from "react-redux";
import { selectFilteredUsers } from "@/redux/selectors";

const TweetsList = () => {
  const [page, setPage] = useState(1);
  const filteredUsers = useSelector(selectFilteredUsers);
  // console.log(filteredUsers);

  const tweetsPerPage = filteredUsers.slice(0, page * 6);
  const isBtnHidden = page * 6 >= filteredUsers.length;
  // console.log(tweetsPerPage);
  const handleLoadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <ul className={styles.list}>
        {tweetsPerPage.map(({ id, ...restProps }) => (
          <li className={styles.item} key={id}>
            <TweetCard id={id} {...restProps} />
          </li>
        ))}
      </ul>

      <button className={styles.btn} type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};

export default TweetsList;
