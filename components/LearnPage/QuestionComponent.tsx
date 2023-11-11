import React from "react";

const QuestionComponent = ({text} : {
  text: string
}) => {
  return (
    <div className="text-4xl justify-center flex px-8 pb-32">
      {text}
    </div>
  );
};

export default QuestionComponent;
