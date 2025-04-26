import { CoffeeIcon } from "lucide-react";



type StatItemProps = {
  number: string;
  description: string;
};

const StatItem = ({ number, description }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
    
    <span className="bg-amber-50 rounded-full h-8 w-8 flex justify-center"> <CoffeeIcon    className=" "/></span>
      <span className="text-3xl md:text-4xl font-serif font-medium text-dark-brown">{number}</span>
      <p className="text-sm md:text-base text-dark-brown/70 mt-2  ">
        {description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="w-full py-6 flex justify-center px-4 z-50">
      <div className="w-[700px] bg-cream rounded-full py-6 md:py-8 px-4 md:px-12  bg-[#ECDAC4] h-42 flex z-50">
        <StatItem number="190+" description="Lorem ipsum dolor sit amet, consectetur" />
        <StatItem number="123K" description="Lorem ipsum dolor sit amet, consectetur" />
        <StatItem number="58" description="Lorem ipsum dolor sit amet, consectetur" />
      </div>
    </div>
  );
};

export default StatsSection;