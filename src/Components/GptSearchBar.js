import { useState } from "react";
import Groq from "groq-sdk";
import { useDispatch, useSelector } from "react-redux";
import { addResult, clearResult } from "../utils/resultSlice";
import { addResultInfo, removeResultInfo } from "../utils/completedataSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const [result, setresult] = useState();
  const groq = new Groq({
    apiKey:process.env.REACT_APP_KEY,
    dangerouslyAllowBrowser: true,
  });
  const completedata = async (dish) => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
    );
    const json = await data.json();

    if (!json.meals) {
    
      return;
    }

    return json.meals;
  };

  const handleclick = async () => {
    dispatch(clearResult());
    dispatch(removeResultInfo())
    const completion = await groq.chat.completions
      .create({
        messages: [
          {
            role: "user",
            content: "give me the names of " + text + " dishes separated by ,",
          },
        ],
        model: "llama-3.3-70b-versatile",
      })
      .then(async (chatCompletion) => {
        if(chatCompletion.choices[0]?.message?.content.length==0)
          return;
        setresult(chatCompletion.choices[0]?.message?.content);
        const messageContent =
          chatCompletion.choices[0]?.message?.content ?? "";
        const arraydata = messageContent.split(",");
        const trimmedArr = arraydata.map((str) => str.trim());
        

        dispatch(addResult(trimmedArr));
        const searchData = await Promise.all(
          trimmedArr.map((data) => completedata(data))
        );

        const filterdata = searchData.filter(
          (item) => item !== undefined && item !== null
        );
        dispatch(addResultInfo(filterdata));
      });
  };

  return (
    <div className=" absolute z-30 border border-black bg-black text-black w-1/2 ml-72 mt-28 p-2 ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="bg-white w-3/4 p-2"
          type="text"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
        
          }}
        />
        <button
          className="bg-red-700 text-white w-1/4 p-2 cursor-pointer"
          onClick={handleclick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
