import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const { id } = params;
  const [recipedata, setrecipedata] = useState();
  const [yturl, setyturl] = useState();
  const [ingred, setingred] = useState();
  const fetchrecipeinfo = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
    const json = await data.json();
    setrecipedata(json);
    const url = json.meals[0].strYoutube;
    const params = new URLSearchParams(new URL(url)?.search);
    const videoId = params.get("v");
    setyturl(videoId);
    const meal = json?.meals?.[0];
    const inglist = Object.entries(meal)
      .filter(
        ([key, value]) =>
          key.includes("strIngredient") && value && value.trim() !== ""
      )
      .map(([key, value]) => value);
   
    setingred(inglist);
  };
  useEffect(() => {
    fetchrecipeinfo();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-20 px-6">
      <h1 className="text-3xl font-bold text-center">
        {recipedata?.meals[0]?.strMeal}
      </h1>
      <div className=" p-6  ">
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src={
              "https://www.youtube.com/embed/" + yturl + "?si=6frg8NYuZg107Iyp"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full m-4 bg-gray-900 p-6 rounded-xl border border-white">
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <p className="leading-7">{recipedata?.meals[0]?.strInstructions}</p>
        </div>

        <div className="mt-12 bg-gray-900 p-6 rounded-xl border border-white max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Ingredients
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc pl-5">
            {ingred?.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Recipe;
