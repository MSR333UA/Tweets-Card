import DropdownFilter from "@/components/DropdownFilter/DropdownFilter";
import GoBackBtn from "@/components/GoBackBtn/GoBackBtn";
import React from "react";

const Tweets = () => {
  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackBtn href="/">Back to Home</GoBackBtn>
        <DropdownFilter />
      </div>

      {/* <TweetsList /> */}
      {/* <ToTopBtn /> */}
    </main>
  );
};

export default Tweets;
