import Card from "./Card";

const CardList = ({ card, cuisineName }) => {
  return (
    <div className="bg-black opacity-85 text-white">
      <h1 className="text-xl md:text-3xl p-4 font-bold">{cuisineName}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {
          card.map((cardval) => (
            <Card key={cardval.idMeal} card={cardval} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
