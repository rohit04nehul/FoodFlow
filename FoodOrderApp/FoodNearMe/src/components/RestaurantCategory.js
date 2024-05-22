import ItemList from "./ItemList";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-8/12 bg-gray-250 shadow-2xl p-6 mx-auto my-4">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? <GoChevronUp /> : <GoChevronDown />}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
