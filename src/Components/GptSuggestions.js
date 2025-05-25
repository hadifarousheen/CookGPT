import { useSelector } from "react-redux";
import CardList from "./CardList";

const GptSuggestions = () => {
  const resultinfo = useSelector(
    (store) => store.CompleteData.searchResultInfo
  );
 
  const data = resultinfo?.flat();
  if (resultinfo?.length == 0) return;
  return (
    <div className="absolute z-30 mt-[15%] left-1/3 transform -translate-x-1/3 border border-white bg-black rounded-md p-4">
      <p className="text-white text-3xl mb-4 pl-4">Suggestions</p>
      <div className="text-white flex flex-wrap justify-center gap-4">
        {data?.map((dish, index) => (
          <CardList key={index} card={dish} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;
