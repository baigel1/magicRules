import "./App.css";
import "@yext/search-ui-react/bundle.css";

const KnowledgeCard = (props: any) => {
  return (
    <div className="result-container" id={props.result.index}>
      <p className="segment-text">
        <span className="segment-label">Segment: </span>
        {props.result.segment.text}
      </p>
      <div className="source-container">
        <p className="source-label">Source:</p>
        <a href={props.result.rawData.c_file.url} className="sourceLink">
          {props.result.name}
        </a>
      </div>
      <div className="score-container">
        <p className="score-label">Relevance Score:</p>
        <p className="score-value">{props.result.segment.score}</p>
      </div>
    </div>
  );
};

export default KnowledgeCard;
