
const CardComponent = () => {
  return (
    <div className="relative w-md  h-full bg-[#FCF7F3] flex items-center justify-center overflow-hidden  mt-11 py-8">
      {/* Background Dots */}
   
<div>
  <img src="/cardUi/images/dotbg2.svg" alt="" className="absolute h-[23vh] bottom-10 z-20" />
</div>
      {/* Card */}
      <div className="relative z-40 translate-x-14 -translate-y-5 rounded-xl border-violet-600">
        <div className="bg-violet-600 rounded-xl w-50 h-48 absolute left-1 top-2" />
        <div className="bg-pink-200 border border-violet-600 rounded-xl shadow-lg w-48 h-48 relative  z-10">
          {/* Top bar */}
          <div className="flex justify-between items-center mb-4 border-b border-b-violet-500 w-full px-2 bg-[#FFEFDE]">
            <span className="text-xl text-violet-600">×</span>
            <span className="text-violet-600">{`>>`}</span>
          </div>
          {/* Folders */}
          <div className="grid grid-cols-3 gap-8 p-4">
           <img src="/cardUi/file/one.png" alt="" />
           <img src="/cardUi/file/three.png" alt="" />
           <img src="/cardUi/file/two.png" alt="" />
          
           <img src="/cardUi/file/last.png" alt="" />
          </div>
        </div>
        {/* 20% Badge */}
        <div className="absolute -bottom-8 left-36 bg-[#611FF3] text-white border-dotted font-mono px-4 py-6 rounded-sm text-lg shadow-lg z-20" >
          20%
        </div>
      </div>
      <div className="w-md h-[40vh]  relative bg-[#FFEFDE]">
      <img src="/cardUi/images/dotbg.svg" alt="" className="w-md h-[40vh]  right-8 bottom-0 absolute" />
      </div>
      
    </div>
  );
};

export default CardComponent;
