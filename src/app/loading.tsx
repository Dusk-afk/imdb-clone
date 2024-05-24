import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image
        className="h-52"
        src="spinner.svg"
        alt="loading"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Loading;
