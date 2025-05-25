import { useEffect, useState } from "react";
import CardList from "./CardList";

const CardContainer = () => {
  const [carddata, setcarddata] = useState(null);
  const [chinese, setchinese] = useState(null);
  const [indian, setindian] = useState(null);
  const [italian, setitalian] = useState(null);

  const [american, setamerican] = useState(null);

  const fetchcuisine = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    );
    const json = await data.json();
    setcarddata(json.meals);
    const chidata = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese"
    );
    const chijson = await chidata.json();
    setchinese(chijson.meals);
    const indata = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
    );
    const injson = await indata.json();
    setindian(injson.meals);

    const italiandata = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian"
    );
    const italianjson = await italiandata.json();
    setitalian(italianjson.meals);

    const americandata = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=American"
    );
    const americanjson = await americandata.json();
    setamerican(americanjson.meals);
  };

  useEffect(() => {
    fetchcuisine();
  }, []);

  return (
    <div className=" bg-black opacity-85 text-white ">
      <div>
        <h1 className="text-3xl p-4 font-bold">Indian</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex ">
            {indian?.map((card, index) => (
              <CardList key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl p-4 font-bold">Canadian</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex">
            {carddata?.map((card, index) => (
              <CardList key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl p-4 font-bold">Chinese</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex">
            {chinese?.map((card, index) => (
              <CardList key={index} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl p-4 font-bold">Italian</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex">
            {italian?.map((card, index) => (
              <CardList key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl p-4 font-bold">American</h1>
        <div className="flex overflow-x-scroll ">
          <div className="flex">
            {american?.map((card, index) => (
              <CardList key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
