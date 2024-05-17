import React from "react";
import Question from "./Question";
import Answer from "./Answer";

const QNAContainer = ({ question, answer }) => {
  return (
    <div className="w-fit m-4 sm:m-8 flex items-center justify-center ">
      <div className="w-4/4 bg-slate-200 text-wrap p-4 rounded-md hover:bg-slate-300 duration-75 cursor-pointer">
        <Question question={question} />
        <Answer answer={answer} />
      </div>
    </div>
  );
};

export default QNAContainer;
