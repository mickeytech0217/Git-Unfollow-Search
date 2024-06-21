import React from "react";

interface TitleType {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: TitleType) => {
  return (
    <div className="mb-12 md:px-4 w-full pl-4 border-4 border-l-lightBlue border-y-0 border-r-0">
      <h2 className=" text-lg">{title}</h2>
      <p className="opacity-80 text-sm">{subtitle}</p>
    </div>
  );
};

export default Title;
