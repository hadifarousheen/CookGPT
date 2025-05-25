import { Link } from "react-router-dom";
const CardList = (props) => {
  const { card } = props;
  
  return (
   <Link to={"recipe/"+card.idMeal} > <div className="w-48 m-2 border border-black rounded-2xl shadow-2xl hover:scale-120 ">
      <img className="rounded-2xl opacity-100" src={card.strMealThumb} />
      <h1 className="text-2xl text-center py-1.5 px-1">{card.strMeal}</h1>
    </div>
    </Link>
  );
};

export default CardList;
