import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
const GptSearch = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10 w-full">
          <img
            className="h-screen object-cover w-full fixed"
            src="https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=612x612&w=0&k=20&c=PP5ejMisEwzcLWrNmJ8iPPm_u-4P6rOWHEDpBPL2n7Q="
            alt="food-image"
          />
        </div>
        <GptSearchBar />
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
