import React from "react";

const addBannerPlacement = {
  id: 1,
  image: "https://placehold.co/920x110/png",
};

const AdBanner1 = () => {
  return (
    <div className="mb-5">
      <img src={addBannerPlacement.image} />
    </div>
  );
};

export default AdBanner1;
