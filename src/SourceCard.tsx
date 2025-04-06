import { CitationProps } from "@yext/search-ui-react";

interface RawData {
  c_file?: {
    url: string;
  };
}

const SourceCard = (props: CitationProps) => {
  let rawData: RawData = props.searchResult.rawData;
  let link = rawData.c_file?.url;
  const name = props.searchResult?.name;
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-slate-100 flex flex-col grow-0 shrink-0 basis-64 text-sm text-neutral overflow-x-auto cursor-pointer hover:border-indigo-500">
      {link ? (
        <a href={link} className="hover:text-indigo-500" target="_self">
          {name}
        </a>
      ) : (
        <p>
          {name} <span className="text-xs">(no link available)</span>
        </p>
      )}
    </div>
  );
};

export default SourceCard;
