export default function CountryTimezoneSelector() {
  return (
    <div className="w-full bg-[#C4C4C4] p-8 font-mono">
      {/* Header */}
      <div className="bg-white p-4 mb-6 text-center text-sm justify-around font-light text-black flex gap-2">
        <span className="font-bold">***</span> COUNTRY <span className="font-bold">***</span> TIMEZONE <span className="font-bold">***</span> COUNTRY <span className="font-bold">***</span> TIMEZONE<span className="font-bold">***</span> COUNTRY
      </div>

      {/* Instructions */}
      <div className="text-2xl mb-12 text-black">
        Double click to select your country from the list on the right <br /> panel, then write down favorite hour of the day and your timezone.
      </div>

      {/* Country and Timezone Container */}
      <div className="bg-red-400 p-4 relative">
        {/* Country data label */}
        <div className="absolute -top-4 left-72 flex items-center hidden sm:flex">
          <div className="text-purple-600 text-2xl mr-1">◆</div>
          <div className="text-purple-600 text-sm">country.data</div>
        </div>

        {/* Country Row */}
        <div className="flex flex-col sm:flex-row mb-4">
          <div className="bg-black text-white p-4 sm:w-64 flex items-center justify-end">
            <span className="text-2xl">COUNTRY</span>
          </div>
          <div className="flex-1 p-4 flex items-center">
            <span className="text-2xl font-bold mr-4">Portugal</span>
            <span className="text-2xl mx-2">|</span>
            <div className="mx-2">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="none" />
                <path d="M12 2 A10 10 0 0 1 12 22 A10 10 0 0 1 12 2" 
                      stroke="white" strokeWidth="1" fill="none" />
                <path d="M2 12 L22 12 M12 2 L12 22" 
                      stroke="white" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <span className="text-2xl ml-4">PRT</span>
          </div>
        </div>

        {/* Time data label */}
        <div className="absolute left-72 flex items-center hidden sm:flex" style={{ top: "80px" }}>
          <div className="text-purple-600 text-2xl mr-1">◆</div>
          <div className="text-purple-600 text-sm">time.data</div>
        </div>

        {/* Timezone Row */}
        <div className="flex flex-col sm:flex-row">
          <div className="bg-black text-white p-4 sm:w-64 flex items-center justify-end">
            <span className="text-2xl">TIMEZONE</span>
          </div>
          <div className="flex-1 p-4 flex items-center">
            <span className="text-2xl font-bold">04:00PM (GMT+1)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
