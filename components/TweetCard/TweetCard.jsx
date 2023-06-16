import Image from "next/image";
import React from "react";
import styles from "./TweetCard.module.css";

const TweetCard = ({ id, user, avatar, tweets, followers, isFollowing }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={avatar} alt={user} />
      </div>

      <div className={styles.info}>
        <p className={styles.stats}> Tweets</p>
        <p className={styles.stats}>{followers} Followers</p>
      </div>
      <button
        type="button"
        // onClick={handleFollow}
        // disabled={isLoading}
        className={isFollowing ? styles.active : styles.btn}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default TweetCard;
