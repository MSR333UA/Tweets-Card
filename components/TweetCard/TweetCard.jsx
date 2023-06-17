"use client";

import Image from "next/image";
import React from "react";
import styles from "./TweetCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { followUser } from "@/redux/tweets/operations";
import { selectIsLoading } from "@/redux/selectors";

const TweetCard = ({ id, user, avatar, tweets, followers, isFollowing }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  console.log(id);

  const handleFollow = () => {
    dispatch(
      followUser(
        isFollowing
          ? { id, followers: followers - 1, isFollowing: false }
          : { id, followers: followers + 1, isFollowing: true }
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/225.jpg"
          }
          alt={user}
        />
      </div>

      <div className={styles.info}>
        <p className={styles.stats}>{tweets} Tweets</p>
        <p className={styles.stats}>{followers} Followers</p>
      </div>

      <button
        className={isFollowing ? styles.active : styles.btn}
        type="button"
        onClick={handleFollow}
        disabled={isLoading}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default TweetCard;
