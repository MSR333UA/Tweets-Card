import DropdownFilter from "@/components/DropdownFilter/DropdownFilter";
import GoBackBtn from "@/components/GoBackBtn/GoBackBtn";
import TweetsList from "@/components/TweetsList/TweetsList";
import React from "react";
import styles from "./page.module.css";

const Tweets = () => {
  return (
    <main className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackBtn href="/">Back to Home</GoBackBtn>
        <DropdownFilter />
      </div>

      <TweetsList />
      {/* <ToTopBtn /> */}
    </main>
  );
};

export default Tweets;
