import React from "react";

interface FooterType {
  text: string;
  url: string;
}

const Footer = ({ text, url }: FooterType) => {
  return (
    <>
      <hr className="mt-4 h-[2px] opacity-80 bg-lightBlue mx-4" />
      <div className="relative w-full mb-0 text-center text-xs py-1">
        <span className="mx-auto px-2">
          {text} <a href={url}>Lakshan Rukantha</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
