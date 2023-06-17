"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import DropdownFilter from "@/components/DropdownFilter/DropdownFilter";
import GoBackBtn from "@/components/GoBackBtn/GoBackBtn";
import TweetsList from "@/components/TweetsList/TweetsList";
import styles from "./page.module.css";
import { fetchUsers } from "@/redux/tweets/operations";

const Tweets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackBtn href="/">Back to Home</GoBackBtn>
        <DropdownFilter />
      </div>

      <TweetsList  />
      {/* <ToTopBtn /> */}
    </main>
  );
};

export default Tweets;
