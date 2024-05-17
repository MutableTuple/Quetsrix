import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-500 h-auto flex flex-col-2 p-4 text-slate-50">
      <div className="w-full text-center flex items-center flex-col justify-center ">
        <div className="space-x-2">
          <a
            href="https://www.linkedin.com/in/yogesh-vishwakarma-bb132721a/"
            target="_blank"
            className="text-blue-300 underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MutableTuple "
            target="_blank"
            className="text-slate-200 underline"
          >
            Github
          </a>
          <a
            href="https://x.com/TupleMutable"
            target="_blank"
            className="text-slate-200 underline"
          >
            X
          </a>
        </div>

        <p className="sm:w-3/4 w-full">
          Made by Yogesh Vishwakarma in 1 hour 22 minutes, definitely can be
          made in just 5 minutes. I am slow 😐
        </p>
        <p className="font-bold">
          Tech Stack used: ReactJS, HTML, JS, TailwindCSS
        </p>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Footer;
