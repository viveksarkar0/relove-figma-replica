import { User } from "lucide-react";
import ProfileForm from "./ProfileForm";
import CountryTimezoneSelector from "./CustomTimeZone";

export default function AboutMeForm() {
  return (
    <div className="bg-black relative text-white w-full sm:w-2xl mx-auto border-8 border-black shadow-[10px_10px_0px_rgba(0,0,0,100)] mt-14">
      {/* Header navigation */}
      <div className="flex justify-between items-center p-2 bg-black z-50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
        </div>
        <div className="text-xl font-mono text-center">PERSONALIZE</div>
        <div className="text-lg">
          <span className="inline-block rounded-sm px-1">
            <User />
          </span>
        </div>
      </div>

      {/* Main content area */}
      <div className="bg-white text-black p-6 flex flex-col sm:flex-row relative">
        <div className="sm:w-3/4">
          <h1 className="text-4xl mb-3">Start personalizing your Badge</h1>
          <p>
            You can double-click to change your cursor, background and
            wallpaper, or just copy & paste your stickers onto the badge (the
            stickers are editable).
          </p>
          <span>Feel free to go wild.</span>
        </div>

        <div className="absolute right-0 top-0 hidden sm:block">
          <img src="/flower.svg" alt="Decorative flower" />
        </div>
      </div>

      {/* About Me section with grid background */}
      <div
        className="bg-white text-black p-6 relative z-50 overflow-hidden border-t border-t-black"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        {/* Navigation links */}
        <div className="w-full flex justify-center">
          <ul className="flex bg-black text-white w-[90%] justify-around p-1 gap-2">
            <li className="text-sm font-thin">ABOUT ME </li>
            <li>***</li>
            <li className="text-sm font-thin">ABOUT ME </li>
            <li>***</li>
            <li className="text-sm font-thin">ABOUT ME </li>
            <li>***</li>
            <li className="text-sm font-thin">ABOUT ME </li>
            <li>***</li>
            <li className="text-sm font-thin">ABOUT ME </li>
          </ul>
        </div>

        {/* Profile Form */}
        <ProfileForm />
      </div>

      {/* Country and Timezone selector */}
      <CountryTimezoneSelector />
    </div>
  );
}
