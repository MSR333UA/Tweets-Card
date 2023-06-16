import React from "react";

const Tweets = () => {
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackButton to="/">Back to Home Page</GoBackButton>
        <Dropdown />
      </div>

      <TweetsList />
      <ToTopBtn />
    </main>
  );
};

export default Tweets;
