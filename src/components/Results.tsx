import IMovie from "@/models/IMovie";
import React from "react";
import Card from "./Card";

interface ResultsProps {
  results: IMovie[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} movie={result} />
      ))}
    </div>
  );
};

export default Results;
