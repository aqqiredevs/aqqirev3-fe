import Image from "next/image";
import React from "react";

const AdBanner = ({
  image = "https://placehold.co/920x110/png",
  link = "https://aqqire.com",
  alt = "Advertisement Banner",
}: {
  image: string;
  link: string;
  alt: string;
}) => {
  return (
    <div className="mb-5">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image alt={alt} width={920} height={110} src={image} />
      </a>
    </div>
  );
};

export default AdBanner;
