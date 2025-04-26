


// import other cards...

import CardFive from "../components/cards/CardFive";
import CardFour from "../components/cards/CardFour";
import CardOne from "../components/cards/CardOne";
import CardSix from "../components/cards/CardSix";
import Y2KFrame from "../components/cards/CardThree";
import CardComponent from "../components/cards/CardTwo";
import LastCard from "../components/cards/LastCard";

const CardCarousel = () => {
  return (
    <div className="p-4 flex justify-center flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Card UI Showcase</h1>
      
        <CardOne/>
        <CardComponent/>
        <Y2KFrame/>
        <CardFour/>
        <CardFive/>
        <CardSix/>
        <LastCard/>
    </div>
  );
};

export default CardCarousel;
