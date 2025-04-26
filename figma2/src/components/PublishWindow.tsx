import { GiftIcon } from "lucide-react";

const PublishWindow = () => {
  return (
    <div className="bg-black relative text-white w-full md:w-5xl z-50 mx-auto border-4 md:border-8 border-black   shadow-[10px_10px_0px_rgba(0,0,0,100)] mb-5">
      <div className="bg-black">
        <div className="flex justify-between items-center p-2 bg-black z-50">
          <div className="flex space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-white"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-white"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-black border-2 border-white"></div>
          </div>
          <div className="font-extralight text-center text-sm md:text-base">PUBLISH</div>
          <div className="text-base md:text-lg">
            <span className="inline-block rounded-sm px-1">
              <GiftIcon size={16} className="md:w-6 md:h-6" />
            </span>
          </div>
        </div>

        <div className="bg-white text-black p-3 md:p-6 flex flex-col md:flex-row relative z-50">
          <div className="z-50 w-full md:w-2xl mb-3.5">
            <h1 className="text-2xl md:text-4xl mb-2 md:mb-3 font-bold">
              Publish your remix in the Community and share it on social.
            </h1>

            <p className="z-50 mb-4 text-sm md:text-base">
              Now that you've duplicated figma.os and made it your own, just hit
              that publish button!
            </p>
            <div className="flex items-start md:items-center justify-center text-xs md:text-base">
              <img src="/note.svg" alt="" className="w-6 md:w-9 mt-1 md:mt-0" />
              <p>
                <b>Note:</b> Organizations and teams only allow admins to
                publish to the Figma Community. To publish with your work
                account, duplicate to external teams and publish.
              </p>
            </div>
          </div>

          <div className="hidden md:block absolute right-0 top-0 z-0">
            <img src="/v.svg" alt="" className="z-0" />
          </div>
        </div>

        <div
          className="border-y-2 md:border-y-4 border-y-black z-0 text-black h-full py-4 md:py-8 px-3 md:px-5 flex flex-col gap-2 md:gap-3.5"
          style={{
            backgroundImage: `
            linear-gradient(to right,
              white 0%, white 2%,
              #c1b0ad 2%, #c1b0ad 24%,
              #ccc 24%, #ccc 26%,
              #c1b0ad 26%, #c1b0ad 49%,
              #ccc 49%, #ccc 51%,
              #c1b0ad 51%, #c1b0ad 74%,
              #ccc 74%, #ccc 76%,
              #c1b0ad 76%, #c1b0ad 98%,
              white 98%, white 100%
            )
          `,
          }}
        >
          <div className="flex gap-2 md:gap-5 items-start md:items-center">
            <img src="/step1.svg" alt="" className="w-10 md:w-auto opacity-[88%] mt-1 md:mt-0" />
            <p className="text-xs md:text-base">
              <b>Step 1.</b>
              Click on the Share button located on the top right corner of
              Figma's UI.
            </p>
          </div>
          <div className="flex gap-2 md:gap-5 items-start md:items-center">
            <img src="/step2.svg" alt="" className="w-10 md:w-auto opacity-[88%] mt-1 md:mt-0" />
            <p className="text-xs md:text-base">
              <b>Step 2.</b> Once the window opens, select Publish to Community
              on the top and then press the Publish on the bottom right corner.
            </p>
          </div>
          <div className="flex gap-2 md:gap-5 items-start md:items-center">
            <img src="/step3.svg" alt="" className="w-10 md:w-auto opacity-[88%] mt-1 md:mt-0" />
            <p className="text-xs md:text-base">
              <b>Step 3.</b> Name the file: Config 2022 Name Card - [FirstName
              LastName] and make sure you use the Tags: #config2022, Friends of
              Figma and FigmaOS
            </p>
          </div>
          <div className="flex gap-2 md:gap-5 items-start md:items-center">
            <img src="/step4.svg" alt="" className="w-10 md:w-auto opacity-[88%] mt-1 md:mt-0" />
            <p className="text-xs md:text-base">
              <b> Step 4.</b>
              Set the file to preview as a Prototype and click the Publish on
              the bottom right corner.
            </p>
          </div>
          <div className="flex gap-2 md:gap-5 items-start md:items-center">
            <img src="/step5.svg" alt="" className="w-10 md:w-auto opacity-[88%] mt-1 md:mt-0" />
            <p className="text-xs md:text-base">
              <b> Share it on Social</b>
              Grab your community post link and share on your favorite social network.
            </p>
          </div>
        </div>

        <div
          className="bg-white border-t border-t-black text-black p-4 md:p-6 relative"
          style={{
            backgroundImage:
              "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "20px 20px md:40px 40px",
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 justify-center flex items-center mb-4 md:mb-0">
              <div>
                <h1 className="text-xl md:text-2xl font-bold">Why not a new profile pic?</h1>
                <p className="text-sm md:text-base">
                  Pick your avatar and update your favorite social <br className="hidden md:block" />
                  media platforms (why not your Figma profile too 😉)
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col md:flex-col gap-4 md:gap-6">
              <div>
                <p className="text-gray-400 text-xs md:text-base">profile.pic</p>
                <img src="/profileone.svg" alt="" className="w-full md:w-auto" />
              </div>
              <div>
                <p className="text-gray-400 text-xs md:text-base">profile.pic</p>
                <img src="/profile2.svg" alt="" className="w-full md:w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishWindow;