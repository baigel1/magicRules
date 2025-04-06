import {
  GenerativeDirectAnswer,
  ResultsCount,
  SearchBar,
  VerticalResults,
} from "@yext/search-ui-react";
import "./App.css";
import "@yext/search-ui-react/bundle.css";

import SourceCard from "./SourceCard";

import KnowledgeCard from "./KnowledgeCard";

//loading state
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchState } from "@yext/search-headless-react";

function App() {
  const gdaLoading = useSearchState(
    (state) => state.generativeDirectAnswer.isLoading
  );
  return (
    <div className="search-page">
      <SearchBar placeholder="Ask your question..." />

      <div className="loading-container">
        {gdaLoading && <Skeleton count={5} />}
      </div>

      <GenerativeDirectAnswer CitationCard={SourceCard} />
      <ResultsCount />
      <VerticalResults CardComponent={KnowledgeCard} />
    </div>
  );
}

export default App;
