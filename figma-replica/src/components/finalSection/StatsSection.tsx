import { CoffeeIcon } from "lucide-react";

type StatItemProps = {
  number: string;
  description: string;
};

const StatItem = ({ number, description }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center text-center px-2 sm:px-4">
      <span className="bg-amber-50 rounded-full h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center">
        <CoffeeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
      </span>
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-dark-brown mt-1">
        {number}
      </span>
      <p className="text-xs sm:text-sm md:text-base text-dark-brown/70 mt-1 sm:mt-2">
        {description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="w-full py-4 sm:py-6 flex justify-center px-4 z-50">
      <div className="w-full max-w-[700px] bg-cream rounded-2xl sm:rounded-3xl md:rounded-full py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-12 bg-[#ECDAC4] flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-0 z-50">
        <StatItem 
          number="190+" 
          description="Lorem ipsum dolor sit amet" 
        />
        <StatItem 
          number="123K" 
          description="Lorem ipsum dolor sit amet" 
        />
        <StatItem 
          number="58" 
          description="Lorem ipsum dolor sit amet" 
        />
      </div>
    </div>
  );
};

export default StatsSection;