
const CardSix = () => {
  return (
    <div className="w-xl mt-7 h-[70vh] bg-[#31768E] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Green Desktop Section */}
      <div className="absolute right-6 bg-[#7ED0BD] w-[360px] h-[220px] rounded-sm  -translate-y-5">
        {/* Folders */}
        <div className="flex flex-wrap  ">
          {/* First Folder */}
          <div className="flex flex-col items-center w-[100px] mt-2">
            <img
              src="/cardUi/file/folder/folder.png"
              alt="Folder"
              className="w-14"
            />
            <span className="text-xs text-black mt-1">Папка</span>
          </div>

          {/* Second Folder */}
          <div className="flex flex-col items-center w-[100px] mt-2">
            <img
              src="/cardUi/file/folder/folder.png"
              alt="Folder"
              className="w-14"
            />
            <span className="text-xs text-black mt-1">Мамка</span>
          </div>

          {/* Third Folder Centered Below */}
          <div className="flex flex-col  w-full  mt-8 translate-x-6 ">
            <div className="flex flex-col ">
              <img
                src="/cardUi/file/folder/folder.png"
                alt="Folder"
                className="w-14"
              />
              <span className="text-xs text-black mt-1">Работка</span>
            </div>
          </div>
        </div>
      </div>

      {/* Girl Image Overlapping */}
      <img
        src="/cardUi/file/folder/girl.svg"
        alt="Girl"
        className="absolute top-[33%] left-[13%] w-[130px] rounded-sm shadow-md z-50"
      />

      {/* Popup Save Box */}
      <div className="bg-[#d9d9d9] w-[300px] mb-11 h-42 mt-[-30px] rounded-sm shadow-lg absolute top-[70%]">
        {/* Top Bar */}
        <div className="bg-[#E353A2] w-full  flex justify-end items-center mb-3 px-2 p-1">
        <img src="/xicon.svg" alt=""  className="w-4"/>
     
        </div>

        {/* Progress Blocks */}
        <div className="p-4">
        <h1 className= "font-bold text-black text-sm  mb-4">Сохранить?</h1>
        <div className="w-full h-4 bg-[#C4C4C4] flex px-1 gap-[2px] mb-4 shadow-inner  border-[#C4C4C4]">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className={`h-full w-[6px] ${
                index < 14 ? "bg-pink-500" : "bg-transparent"
              }`}
            ></div> 
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-around mt-3">
          <button className="border border-black px-6 py-1 bg-[#C4C4C4] text-sm">
            Yes
          </button>
          <button className="border border-black px-6 py-1 bg-[#C4C4C4] text-sm ">
            Yes!
          </button>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CardSix;
