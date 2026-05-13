"use client";
import React from "react";
import Link from "next/link";

const Button = ({ text, link = "/", onClick }) => {
  return (
    <Link href={link} target="_blank">
      <span
        onClick={onClick}
        className={`bg-primary text-white  font-medium px-8 py-4 rounded-lg  text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover-primary`}
      >
        {text}
      </span>
    </Link>
  );
};

export default Button;
