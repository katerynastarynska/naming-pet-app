import * as React from "react";

interface Contest {
  categoryName: string;
  contestName: string;
  id: string;
}

const ContestPreview: React.FC<{
  contest: Contest;
  onClick: any;
}> = ({ contest, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    onClick(contest.id);
  };

  return (
    <div className="contest-preview link" onClick={handleClick}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
