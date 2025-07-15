import { useEffect, useState } from "react";
import CardList from "./CardList";
import { cuisines } from "../utils/cuisines";

const CardContainer = () => {
  const [cuisinefulldata, setcuisinefulldata] = useState([]);
  const fetchCuisine = async () => {
    const cuisinedata = await Promise.all(
      cuisines.map((cuisine) =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=" + cuisine)
          .then((res) => res.json())
      )
    );

    const cuisineMeals = cuisinedata.map((cuisineMeal) => cuisineMeal.meals);
    setcuisinefulldata(cuisineMeals);
  };

  useEffect(() => {
    fetchCuisine();
  }, []);

  return (
    <>
      {cuisinefulldata.map((cardList, index) => (
        <CardList key={index} card={cardList} cuisineName={cuisines[index]} />
      ))}
    </>
  );
};

export default CardContainer;
