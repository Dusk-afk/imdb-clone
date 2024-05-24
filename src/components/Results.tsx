import IMovie from "@/models/IMovie";
import React from "react";

interface ResultsProps {
  results: IMovie[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Results;
