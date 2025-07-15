import { Link } from "react-router-dom";
const Card = ({ card }) => {
  return (
    <div>
      <Link to={"recipe/" + card.idMeal}>
        <div className="w-44 m-1 border border-black rounded-2xl shadow-2xl hover:scale-120 ">
          <img className="rounded-2xl opacity-100" src={card.strMealThumb} />
          <h1 className="text-2xl text-center py-1.5 px-1">{card.strMeal}</h1>
        </div>
      </Link>
    </div>
  );
};
export default Card;
