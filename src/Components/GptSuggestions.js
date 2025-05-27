import { useSelector } from "react-redux";
import CardList from "./CardList";

const GptSuggestions = () => {
  const resultinfo = useSelector(
    (store) => store.CompleteData.searchResultInfo
  );
 
  const data = resultinfo?.flat();
  if (resultinfo?.length == 0) return;
  return (
    <div className="absolute z-30 mt-[45%] md:mt-[15%] md:left-1/3 md:transform md:-translate-x-1/3 border border-white bg-black rounded-lg md:p-4 opacity-80">
      <p className="text-white text-xl pl-2 py-1 md:text-3xl md:mb-4 md:pl-4 font-bold md:text-center">Suggestions</p>
      <div className="text-white p-2 md:p-0 flex flex-wrap md:justify-center md:gap-4">
        {data?.map((dish, index) => (
          <CardList key={index} card={dish} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestions;
